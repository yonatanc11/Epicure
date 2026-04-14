import type { Request, Response } from 'express'
import { RestaurantModel } from './restaurant.model'
import { ChefModel } from '../chefs/chef.model'
import { toRestaurantDTO } from '../mappers'

export async function list(_req: Request, res: Response) {
  const restaurants = await RestaurantModel.find()
  const chefIds = restaurants.map((r) => r.chefId)
  const chefs = await ChefModel.find({ _id: { $in: chefIds } })
  const chefNameById = new Map(chefs.map((c) => [c._id.toString(), c.name]))

  const dtos = restaurants.map((r) =>
    toRestaurantDTO(r, chefNameById.get(r.chefId.toString()) ?? '')
  )
  res.json(dtos)
}

export async function getById(req: Request, res: Response) {
  const restaurant = await RestaurantModel.findById(req.params.id)
  if (!restaurant) return res.status(404).json({ error: 'restaurant not found' })

  const chef = await ChefModel.findById(restaurant.chefId)
  res.json(toRestaurantDTO(restaurant, chef?.name ?? ''))
}
