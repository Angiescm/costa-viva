import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/User'
import { Passport } from '../models/Passport'
import QRCode from 'qrcode'

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'El email ya está registrado' })
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)

    // Crear usuario
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'tourist'
    })

    await user.save()

    // Si es turista, crear pasaporte
    if (role === 'tourist' || !role) {
      const passportNumber = `CV-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      const qrCode = await QRCode.toDataURL(passportNumber)

      const passport = new Passport({
        userId: user._id,
        passportNumber,
        qrCode
      })

      await passport.save()
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    )

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Error en el registro', error })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // Buscar usuario
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' })
    }

    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciales inválidas' })
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    )

    res.json({
      message: 'Sesión iniciada exitosamente',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Error en el login', error })
  }
}

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId

    const user = await User.findById(userId).select('-password')
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    res.json({ user })
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo usuario', error })
  }
}
