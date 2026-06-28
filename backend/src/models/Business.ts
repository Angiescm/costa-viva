import { Schema, model } from 'mongoose'

interface IBusiness {
  name: string
  description: string
  category: string
  location: {
    type: string
    coordinates: [number, number]
  }
  address: string
  phone: string
  email: string
  website?: string
  logo?: string
  owner: Schema.Types.ObjectId
  visitorsCount: number
  rating: number
  reviews: Schema.Types.ObjectId[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const businessSchema = new Schema<IBusiness>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    website: String,
    logo: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    visitorsCount: { type: Number, default: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
)

businessSchema.index({ location: '2dsphere' })

export const Business = model<IBusiness>('Business', businessSchema)
