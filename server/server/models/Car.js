import { Schema } from "mongoose";


const Car = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    mileage: { type: Number, required: true },
    creatorId: { type: String, required: true, ref: 'Account' },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Car.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Car