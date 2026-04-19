import { Schema, model, type InferSchemaType } from 'mongoose'

const chefSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, default: '' },
  },
  { timestamps: true }
)

export type ChefDoc = InferSchemaType<typeof chefSchema>
export const ChefModel = model('Chef', chefSchema)
