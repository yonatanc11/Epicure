export type DishIcon = 'spicy' | 'vegetarian' | 'vegan'

export interface DishDTO {
  id: string
  name: string
  ingredients: string
  icon?: DishIcon
  price: number
  image: string
  restaurantId: string
}
