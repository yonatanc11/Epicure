import type { Request, Response } from 'express'
import { ChefModel } from './chef.model'
import { RestaurantModel } from '../restaurants/restaurant.model'
import { toChefDTO, toRestaurantDTO } from '../mappers'

export async function list(_req: Request, res: Response) {
  const chefs = await ChefModel.find().lean(false)
  const chefIds = chefs.map((c) => c._id)
  const restaurants = await RestaurantModel.find({ chefId: { $in: chefIds } })

  const restaurantsByChef = new Map<string, ReturnType<typeof toRestaurantDTO>[]>()
  for (const r of restaurants) {
    const key = r.chefId.toString()
    const dto = toRestaurantDTO(r, chefs.find((c) => c._id.equals(r.chefId))?.name ?? '')
    const list = restaurantsByChef.get(key) ?? []
    list.push(dto)
    restaurantsByChef.set(key, list)
  }

  const dtos = chefs.map((c) => toChefDTO(c, restaurantsByChef.get(c._id.toString()) ?? []))
  res.json(dtos)
}

export async function getById(req: Request, res: Response) {
  const chef = await ChefModel.findById(req.params.id)
  if (!chef) return res.status(404).json({ error: 'chef not found' })

  const restaurants = await RestaurantModel.find({ chefId: chef._id })
  const restaurantDTOs = restaurants.map((r) => toRestaurantDTO(r, chef.name))
  res.json(toChefDTO(chef, restaurantDTOs))
}
