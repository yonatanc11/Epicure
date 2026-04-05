import { LABELS } from '../constants/strings'
import CardCarousel from './CardCarousel'
import RestaurantCard from './RestaurantCard'
import { restaurants } from '../data/restaurants'


export default function PopularRestaurants() {
  return (
    <section className="px-6 py-8">
      <h2 className="text-h2 mb-4">{LABELS.popularRestaurants}</h2>
      <CardCarousel>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            chef={restaurant.chef}
          />
        ))}
      </CardCarousel>
      <a href="/restaurants" className="flex items-center gap-1 mt-4 text-body">
        {LABELS.allRestaurants} ≫
      </a>
    </section>
  )
}
