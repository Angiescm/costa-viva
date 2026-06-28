import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/costa-viva'
    await mongoose.connect(mongoURI)
    console.log('MongoDB conectado exitosamente')
  } catch (error) {
    console.error('Error conectando a MongoDB:', error)
    process.exit(1)
  }
}

export default connectDB
