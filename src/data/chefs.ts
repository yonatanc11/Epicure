import type { Chef } from '../types/chef'
import { restaurants } from './restaurants'

import asafGranitImg from '../assets/images/chefs/Asaf_Granit.png'
import avivMosheImg from '../assets/images/chefs/Aviv_Moshe.png'
import eyalShaniImg from '../assets/images/chefs/Eyal Shani.png'
import meirAdoniImg from '../assets/images/chefs/Meir_Adoni.png'
import nitzanRazImg from '../assets/images/chefs/Nitzan_Raz.png'
import omerMillerImg from '../assets/images/chefs/Omer_Miller.png'
import shahafShabtaiImg from '../assets/images/chefs/Shahfaf_Shabtai.png'
import yossiShitritImg from '../assets/images/chefs/Yossi_shitrit.png'
import yuvalBenNeriaImg from '../assets/images/chefs/Yuval_Ben_Neria.png'

const restaurantsByChef = (name: string) =>
  restaurants.filter((restaurant) => restaurant.chef === name)

export const chefs: Chef[] = [
  {
    id: crypto.randomUUID(),
    name: 'Yossi Shitrit',
    bio: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen at his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit\'s creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.',
    image: yossiShitritImg,
    restaurants: restaurantsByChef('Yossi Shitrit'),
  },
  {
    id: crypto.randomUUID(),
    name: 'Aviv Moshe',
    bio: 'Aviv Moshe is the head chef of Messa, one of Tel Aviv\'s most celebrated fine-dining destinations. His cuisine masterfully blends classical French technique with bold Middle Eastern flavors, creating a uniquely Israeli fine-dining experience.',
    image: avivMosheImg,
    restaurants: restaurantsByChef('Aviv Moshe'),
  },
  {
    id: crypto.randomUUID(),
    name: 'Eyal Shani',
    bio: 'One of Israel\'s most influential and unconventional chefs, Eyal Shani is celebrated for his ingredient-driven philosophy and theatrical dining experiences. He is the creative force behind Miznon and HaSalon, with outposts spanning Tel Aviv, Paris, New York, and beyond.',
    image: eyalShaniImg,
    restaurants: restaurantsByChef('Eyal Shani'),
  },
  {
    id: crypto.randomUUID(),
    name: 'Meir Adoni',
    bio: 'Meir Adoni is a celebrated Israeli chef and restaurateur renowned for his creative fusion of Mediterranean and Middle Eastern cuisines. With a career spanning acclaimed restaurants across Tel Aviv and New York, he helms Kab Kem among other lauded establishments.',
    image: meirAdoniImg,
    restaurants: restaurantsByChef('Meir Adoni'),
  },
  {
    id: crypto.randomUUID(),
    name: 'Nitzan Raz',
    bio: 'Chef Nitzan Raz is known for her contemporary Israeli cuisine that draws deep inspiration from local seasonal produce and traditional Levantine recipes, elevating humble ingredients into refined, memorable dishes.',
    image: nitzanRazImg,
    restaurants: restaurantsByChef('Nitzan Raz'),
  },
  {
    id: crypto.randomUUID(),
    name: 'Omer Miller',
    bio: 'Omer Miller is an acclaimed Israeli chef celebrated for his refined and produce-led approach to cooking. He has earned a loyal following through seasonal menus that highlight the best of Israeli agriculture and local craftsmanship.',
    image: omerMillerImg,
    restaurants: restaurantsByChef('Omer Miller'),
  },
  {
    id: crypto.randomUUID(),
    name: 'Shahaf Shabtai',
    bio: 'Shahaf Shabtai is a talented Israeli chef known for his inventive dishes that bridge culinary tradition and modern creativity, bringing a fresh perspective to Israeli dining through bold flavor combinations and meticulous technique.',
    image: shahafShabtaiImg,
    restaurants: restaurantsByChef('Shahaf Shabtai'),
  },
  {
    id: crypto.randomUUID(),
    name: 'Yuval Ben Neriah',
    bio: 'Yuval Ben Neriah is the visionary chef behind Yapan, bringing a refined Japanese-Israeli culinary fusion to Tel Aviv. His mastery of Japanese technique combined with local Israeli ingredients has made Yapan one of the city\'s most sought-after dining destinations.',
    image: yuvalBenNeriaImg,
    restaurants: restaurantsByChef('Yuval Ben Neriah'),
  },
  {
    id: crypto.randomUUID(),
    name: 'Asaf Granit',
    bio: 'Born and raised in Jerusalem, Asaf Granit trained at some of the world\'s top kitchens before opening the iconic Machneyuda restaurant in Jerusalem\'s Mahane Yehuda market. His bold, market-driven cooking has earned him international acclaim and a dedicated following.',
    image: asafGranitImg,
    restaurants: restaurantsByChef('Asaf Granit'),
  },
]
