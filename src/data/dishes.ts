import type { Dish } from '../types/dish'
import padKiMaoImg from '../assets/images/dishes/Pad Ki Mao.png'
import garbanzoFritoImg from '../assets/images/dishes/Garbanzo Frito.png'
import smokedPizzaImg from '../assets/images/dishes/Smoked Pizza.png'

export const dishes: Dish[] = [
  {
    id: 'pad-ki-mao',
    name: 'Pad Ki Mao',
    ingredients: 'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
    icon: 'spicy',
    price: 88,
    restaurant: 'Claro',
    image: padKiMaoImg,
  },
  {
    id: 'garbanzo',
    name: 'Garbanzo Frito',
    ingredients: 'Polenta fingers, magic chili cream, verde',
    price: 78,
    restaurant: 'Lumia',
    image: garbanzoFritoImg,
  },
  {
    id: 'smoked-pizza',
    name: 'Smoked Pizza',
    ingredients: 'Trout fillet, lemon butter, capers, herbs',
    icon: 'vegetarian',
    price: 65,
    restaurant: 'Tiger Lily',
    image: smokedPizzaImg,
  },
]