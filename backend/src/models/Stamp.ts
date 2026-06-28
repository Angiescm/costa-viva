import { Schema, model } from 'mongoose'

interface IStamp {
  passportId: Schema.Types.ObjectId
  businessId: Schema.Types.ObjectId
  stampDate: Date
  pointsEarned: number
  createdAt: Date
}

const stampSchema = new Schema<IStamp>(
  {
    passportId: { type: Schema.Types.ObjectId, ref: 'Passport', required: true },
    businessId: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
    stampDate: { type: Date, default: Date.now },
    pointsEarned: { type: Number, default: 10 }
  },
  { timestamps: true }
)

export const Stamp = model<IStamp>('Stamp', stampSchema)
