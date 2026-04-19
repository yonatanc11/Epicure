import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { connectDB } from '../config/db'
import { ChefModel } from '../chefs/chef.model'
import { RestaurantModel } from '../restaurants/restaurant.model'
import { DishModel } from '../dishes/dish.model'

dotenv.config()

type ChefSeed = { name: string; bio: string; image: string }
type RestaurantSeed = { name: string; chefName: string; image: string; rating?: number }
type DishSeed = {
  name: string
  ingredients: string
  icon?: 'spicy' | 'vegetarian' | 'vegan'
  price: number
  restaurantName: string
  image: string
}

const chefs: ChefSeed[] = [
  {
    name: 'Yossi Shitrit',
    bio: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen at his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    image: '/images/chefs/Yossi_shitrit.png',
  },
  {
    name: 'Aviv Moshe',
    bio: "Aviv Moshe is the head chef of Messa, one of Tel Aviv's most celebrated fine-dining destinations. His cuisine masterfully blends classical French technique with bold Middle Eastern flavors, creating a uniquely Israeli fine-dining experience.",
    image: '/images/chefs/Aviv_Moshe.png',
  },
  {
    name: 'Eyal Shani',
    bio: "One of Israel's most influential and unconventional chefs, Eyal Shani is celebrated for his ingredient-driven philosophy and theatrical dining experiences. He is the creative force behind Miznon and HaSalon, with outposts spanning Tel Aviv, Paris, New York, and beyond.",
    image: '/images/chefs/Eyal Shani.png',
  },
  {
    name: 'Meir Adoni',
    bio: 'Meir Adoni is a celebrated Israeli chef and restaurateur renowned for his creative fusion of Mediterranean and Middle Eastern cuisines. With a career spanning acclaimed restaurants across Tel Aviv and New York, he helms Kab Kem among other lauded establishments.',
    image: '/images/chefs/Meir_Adoni.png',
  },
  {
    name: 'Nitzan Raz',
    bio: 'Chef Nitzan Raz is known for her contemporary Israeli cuisine that draws deep inspiration from local seasonal produce and traditional Levantine recipes, elevating humble ingredients into refined, memorable dishes.',
    image: '/images/chefs/Nitzan_Raz.png',
  },
  {
    name: 'Omer Miller',
    bio: 'Omer Miller is an acclaimed Israeli chef celebrated for his refined and produce-led approach to cooking. He has earned a loyal following through seasonal menus that highlight the best of Israeli agriculture and local craftsmanship.',
    image: '/images/chefs/Omer_Miller.png',
  },
  {
    name: 'Shahaf Shabtai',
    bio: 'Shahaf Shabtai is a talented Israeli chef known for his inventive dishes that bridge culinary tradition and modern creativity, bringing a fresh perspective to Israeli dining through bold flavor combinations and meticulous technique.',
    image: '/images/chefs/Shahfaf_Shabtai.png',
  },
  {
    name: 'Yuval Ben Neriah',
    bio: "Yuval Ben Neriah is the visionary chef behind Yapan, bringing a refined Japanese-Israeli culinary fusion to Tel Aviv. His mastery of Japanese technique combined with local Israeli ingredients has made Yapan one of the city's most sought-after dining destinations.",
    image: '/images/chefs/Yuval_Ben_Neria.png',
  },
  {
    name: 'Asaf Granit',
    bio: "Born and raised in Jerusalem, Asaf Granit trained at some of the world's top kitchens before opening the iconic Machneyuda restaurant in Jerusalem's Mahane Yehuda market. His bold, market-driven cooking has earned him international acclaim and a dedicated following.",
    image: '/images/chefs/Asaf_Granit.png',
  },
  { name: 'Ran Shmueli', bio: 'Chef at Claro.', image: '' },
  { name: 'Yanir Green', bio: 'Chef at Tiger Lily.', image: '' },
  { name: 'Ariel Leventhal', bio: 'Chef at Nithan Thai.', image: '' },
]

const restaurants: RestaurantSeed[] = [
  { name: 'Claro', chefName: 'Ran Shmueli', image: '/images/restaurants/claro.png', rating: 4 },
  { name: 'Tiger Lily', chefName: 'Yanir Green', image: '/images/restaurants/tiger-lily.png', rating: 4 },
  { name: 'Nithan Thai', chefName: 'Ariel Leventhal', image: '/images/restaurants/nithan-thai.png', rating: 3 },
  { name: 'Kab Kem', chefName: 'Meir Adoni', image: '/images/restaurants/Kab kem.png', rating: 3 },
  { name: 'Messa', chefName: 'Aviv Moshe', image: '/images/restaurants/Messa.png', rating: 4 },
  { name: 'Yapan', chefName: 'Yuval Ben Neriah', image: '/images/restaurants/Yapan.png', rating: 5 },
  { name: 'Onza', chefName: 'Yossi Shitrit', image: '/images/restaurants/onza.png' },
  { name: 'Kitchen Market', chefName: 'Yossi Shitrit', image: '/images/restaurants/kitchen-market.png' },
  { name: 'Mashya', chefName: 'Yossi Shitrit', image: '/images/restaurants/mashya.png' },
]

const dishes: DishSeed[] = [
  {
    name: 'Pad Ki Mao',
    ingredients: 'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
    icon: 'spicy',
    price: 88,
    restaurantName: 'Claro',
    image: '/images/dishes/Pad Ki Mao.png',
  },
  {
    name: 'Garbanzo Frito',
    ingredients: 'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
    icon: 'spicy',
    price: 78,
    restaurantName: 'Messa',
    image: '/images/dishes/Garbanzo Frito.png',
  },
  {
    name: 'Smoked Pizza',
    ingredients: 'Trout fillet, lemon butter, capers, herbs',
    icon: 'vegetarian',
    price: 65,
    restaurantName: 'Tiger Lily',
    image: '/images/dishes/Smoked Pizza.png',
  },
]

async function run() {
  await connectDB()

  await Promise.all([
    ChefModel.deleteMany({}),
    RestaurantModel.deleteMany({}),
    DishModel.deleteMany({}),
  ])
  console.log('[seed] cleared existing data')

  const insertedChefs = await ChefModel.insertMany(chefs)
  const chefIdByName = new Map(insertedChefs.map((c) => [c.name, c._id]))
  console.log(`[seed] inserted ${insertedChefs.length} chefs`)

  const restaurantsWithRefs = restaurants.map((r) => {
    const chefId = chefIdByName.get(r.chefName)
    if (!chefId) throw new Error(`No chef found for restaurant ${r.name}: ${r.chefName}`)
    return { name: r.name, image: r.image, rating: r.rating, chefId }
  })
  const insertedRestaurants = await RestaurantModel.insertMany(restaurantsWithRefs)
  const restaurantIdByName = new Map(insertedRestaurants.map((r) => [r.name, r._id]))
  console.log(`[seed] inserted ${insertedRestaurants.length} restaurants`)

  const dishesWithRefs = dishes.map((d) => {
    const restaurantId = restaurantIdByName.get(d.restaurantName)
    if (!restaurantId) throw new Error(`No restaurant found for dish ${d.name}: ${d.restaurantName}`)
    return {
      name: d.name,
      ingredients: d.ingredients,
      icon: d.icon,
      price: d.price,
      image: d.image,
      restaurantId,
    }
  })
  const insertedDishes = await DishModel.insertMany(dishesWithRefs)
  console.log(`[seed] inserted ${insertedDishes.length} dishes`)

  await mongoose.disconnect()
  console.log('[seed] done')
}

run().catch(async (err) => {
  console.error('[seed] failed', err)
  await mongoose.disconnect().catch(() => {})
  process.exit(1)
})
