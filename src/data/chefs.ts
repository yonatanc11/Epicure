import type { Chef } from '../types/chef'
import claroImg from '../assets/images/restaurants/claro.png'
import kabKemImg from '../assets/images/restaurants/Kab kem.png'

const PLACEHOLDER = 'https://placehold.co/400x400'

export const chefs: Chef[] = [
  {
    id: 'yossi-shitrit',
    name: 'Yossi Shitrit',
    bio: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen at his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit\'s creativity and culinary acumen born of long experience are expressed in the every detail of each and every dish.',
    image: PLACEHOLDER,
    restaurants: [
      {
        id: 'onza',
        name: 'Onza',
        chef: 'Yossi Shitrit',
        image: claroImg,
      },
      {
        id: 'kitchen',
        name: 'Kitchen',
        chef: 'Yossi Shitrit',
        image: kabKemImg,
      },
    ],
  },
]