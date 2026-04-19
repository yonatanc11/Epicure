import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { connectDB } from '../config/db'
import { ChefModel } from '../chefs/chef.model'
import { RestaurantModel } from '../restaurants/restaurant.model'
import { DishModel } from '../dishes/dish.model'

dotenv.config()

async function run() {
  await connectDB()

  const models = [ChefModel, RestaurantModel, DishModel]
  for (const m of models) {
    await m.createCollection()
    console.log(`[setup] ensured collection: ${m.collection.name}`)
  }

  await mongoose.disconnect()
  console.log('[setup] done')
}

run().catch(async (err) => {
  console.error('[setup] failed', err)
  await mongoose.disconnect().catch(() => {})
  process.exit(1)
})
