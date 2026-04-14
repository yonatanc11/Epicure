import type { ChefDTO, RestaurantDTO, DishDTO } from '@epicure/shared'
import type { HydratedDocument } from 'mongoose'
import type { ChefDoc } from './models/chef.model'
import type { RestaurantDoc } from './models/restaurant.model'
import type { DishDoc } from './models/dish.model'

export function toChefDTO(
  chef: HydratedDocument<ChefDoc>,
  restaurants: RestaurantDTO[] = []
): ChefDTO {
  return {
    id: chef._id.toString(),
    name: chef.name,
    bio: chef.bio,
    image: chef.image,
    restaurants,
  }
}

export function toRestaurantDTO(
  restaurant: HydratedDocument<RestaurantDoc>,
  chefName = ''
): RestaurantDTO {
  return {
    id: restaurant._id.toString(),
    name: restaurant.name,
    chef: chefName,
    image: restaurant.image,
    rating: restaurant.rating ?? undefined,
  }
}

export function toDishDTO(
  dish: HydratedDocument<DishDoc>,
  restaurantName = ''
): DishDTO {
  return {
    id: dish._id.toString(),
    name: dish.name,
    ingredients: dish.ingredients,
    icon: dish.icon as DishDTO['icon'],
    price: dish.price,
    restaurant: restaurantName,
    image: dish.image,
  }
}
