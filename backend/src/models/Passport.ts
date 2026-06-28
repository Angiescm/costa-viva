import { Schema, model } from 'mongoose'

interface IPassport {
  userId: Schema.Types.ObjectId
  passportNumber: string
  qrCode: string
  stampsCollected: number
  businessesVisited: Schema.Types.ObjectId[]
  points: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const passportSchema = new Schema<IPassport>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    passportNumber: { type: String, required: true, unique: true },
    qrCode: { type: String, required: true },
    stampsCollected: { type: Number, default: 0 },
    businessesVisited: [{ type: Schema.Types.ObjectId, ref: 'Business' }],
    points: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
)

export const Passport = model<IPassport>('Passport', passportSchema)
