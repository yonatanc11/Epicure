export type DishIcon = 'spicy' | 'vegetarian' | 'vegan'

export interface DishDTO {
  id: string
  name: string
  ingredients: string
  icon?: DishIcon
  price: number
  restaurant: string
  image: string
}

export type Dish = DishDTO
