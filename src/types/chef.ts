import type { Restaurant } from './restaurant'

export interface Chef {
  id: string
  name: string
  bio: string
  image: string
  restaurants: Restaurant[]
}