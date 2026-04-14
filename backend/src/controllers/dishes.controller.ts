import type { Request, Response } from 'express'
import { DishModel } from '../models/dish.model'
import { RestaurantModel } from '../models/restaurant.model'
import { toDishDTO } from '../mappers'

export async function list(_req: Request, res: Response) {
  const dishes = await DishModel.find()
  const restaurantIds = dishes.map((d) => d.restaurantId)
  const restaurants = await RestaurantModel.find({ _id: { $in: restaurantIds } })
  const nameById = new Map(restaurants.map((r) => [r._id.toString(), r.name]))

  const dtos = dishes.map((d) => toDishDTO(d, nameById.get(d.restaurantId.toString()) ?? ''))
  res.json(dtos)
}

export async function getById(req: Request, res: Response) {
  const dish = await DishModel.findById(req.params.id)
  if (!dish) return res.status(404).json({ error: 'dish not found' })

  const restaurant = await RestaurantModel.findById(dish.restaurantId)
  res.json(toDishDTO(dish, restaurant?.name ?? ''))
}
