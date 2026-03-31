import type { Dish } from '../types/dish.ts'

const PLACEHOLDER = 'https://placehold.co/400x300'

export const dishes: Dish[] = [
  {
    id: 'pad-ki-mao',
    name: 'Pad Ki Mao',
    ingredients: 'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
    icon: 'spicy',
    price: 88,
    restaurant: 'Claro',
    image: PLACEHOLDER,
  },
  {
    id: 'garbanzo',
    name: 'Garbanzo Frito',
    ingredients: 'Polenta fingers, magic chili cream, verde',
    price: 78,
    restaurant: 'Lumia',
    image: PLACEHOLDER,
  },
  {
    id: 'smokey-fish',
    name: 'Smokey Fish',
    ingredients: 'Trout fillet, lemon butter, capers, herbs',
    icon: 'vegetarian',
    price: 65,
    restaurant: 'Tiger Lily',
    image: PLACEHOLDER,
  },
]