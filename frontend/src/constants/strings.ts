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
    orderHistory: 'ORDER HISTORY',
    heroTitle: 'Epicure works with the top chef restaurants in Tel Aviv',
    getItOn: 'Get it on',
    googlePlay: 'Google Play',
    downloadOnThe: 'Download on the',
    appStore: 'App Store',
    brandName: 'EPICURE',
    search: 'Search',
    aboutUsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros. ",
    chefRestaurants: (name: string) => `${name.toUpperCase()}'S RESTAURANTS:`,
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