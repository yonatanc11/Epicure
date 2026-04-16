import type { RestaurantDTO } from './restaurant'

export interface ChefDTO {
  id: string
  name: string
  image: string
  bio?: string
  restaurants: RestaurantDTO[]
}

export type Chef = ChefDTO
