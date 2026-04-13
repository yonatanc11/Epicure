import type { RestaurantDTO } from './restaurant.dto'

export interface ChefDTO {
  id: string
  name: string
  bio: string
  image: string
  restaurants: RestaurantDTO[]
}

export type Chef = ChefDTO
