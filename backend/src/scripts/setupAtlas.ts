import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { connectDB } from '../config/db'
import { ChefModel } from '../models/chef.model'
import { RestaurantModel } from '../models/restaurant.model'
import { DishModel } from '../models/dish.model'

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
