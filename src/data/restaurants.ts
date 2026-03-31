import type { Restaurant } from '../types/restaurant.ts'

const PLACEHOLDER = 'https://placehold.co/400x300'

export const restaurants: Restaurant[] = [
  {
    id: 'claro',
    name: 'Claro',
    chef: 'Ran Shmueli',
    image: PLACEHOLDER,
  },
  {
    id: 'lumia',
    name: 'Lumia',
    chef: 'Meir Adoni',
    image: PLACEHOLDER,
  },
  {
    id: 'tiger-lily',
    name: 'Tiger Lily',
    chef: 'Yanir Green',
    image: PLACEHOLDER,
  },
]