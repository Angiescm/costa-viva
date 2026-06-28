import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  email: string
  password: string
  phone?: string
  avatar?: string
  role: 'tourist' | 'business' | 'admin'
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: String,
    avatar: String,
    role: { type: String, enum: ['tourist', 'business', 'admin'], default: 'tourist' }
  },
  { timestamps: true }
)

export const User = model<IUser>('User', userSchema)
