export const CURRENCY_SYMBOL = '₪'

export const LABELS = {
  allRestaurants: 'All Restaurants',
  popularRestaurants: 'POPULAR RESTAURANT IN EPICURE:',
  signatureDishes: 'SIGNATURE DISH OF:',
  iconsMeaning: 'THE MEANING OF OUR ICONS:',
  chefOfTheWeek: 'CHEF OF THE WEEK:',
  aboutUs: 'ABOUT US:',
  contactUs: 'Contact Us',
  termOfUse: 'Term of Use',
  privacyPolicy: 'Privacy Policy',
  restaurants: 'Restaurants',
  chefs: 'Chefs',
  searchPlaceholder: 'Search for restaurant, cuisine, chef',
  emptyBag: 'YOUR BAG IS EMPTY',
  heroTitle: 'Epicure works with the top chef restaurants in Tel Aviv',
  getItOn: 'Get it on',
  googlePlay: 'Google Play',
  downloadOnThe: 'Download on the',
  appStore: 'App Store',
}

export const ALT_TEXT = {
  restaurantImage: (name: string) => `${name} restaurant`,
  dishImage: (name: string) => `${name} dish`,
  chefImage: (name: string) => `Chef ${name}`,
  logo: 'Epicure logo',
}

export const ICON_TYPES = {
  spicy: 'spicy',
  vegetarian: 'vegetarian',
  vegan: 'vegan',
} as const

export type IconType = typeof ICON_TYPES[keyof typeof ICON_TYPES]