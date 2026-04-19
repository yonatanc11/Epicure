export interface RestaurantDTO {
  id: string
  name: string
  chef: string
  image: string
  rating?: number
}

export type Restaurant = RestaurantDTO
