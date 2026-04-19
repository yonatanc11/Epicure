import { Schema, model, type InferSchemaType } from 'mongoose'

const dishSchema = new Schema(
  {
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    icon: { type: String, enum: ['spicy', 'vegetarian', 'vegan'] },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
)

export type DishDoc = InferSchemaType<typeof dishSchema>
export const DishModel = model('Dish', dishSchema)
