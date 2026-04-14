import type { IconType } from '../constants/strings'

export interface Dish {
  id: string
  name: string
  ingredients: string
  icon?: IconType
  price: number
  restaurant: string
  image: string
}