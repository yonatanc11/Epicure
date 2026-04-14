import { Schema, model, type InferSchemaType } from 'mongoose'

const restaurantSchema = new Schema(
  {
    chefId: { type: Schema.Types.ObjectId, ref: 'Chef', required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number },
  },
  { timestamps: true }
)

export type RestaurantDoc = InferSchemaType<typeof restaurantSchema>
export const RestaurantModel = model('Restaurant', restaurantSchema)
