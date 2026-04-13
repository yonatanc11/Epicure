import { useEffect, useState } from 'react'
import type { RestaurantDTO } from '@epicure/shared'
import { LABELS } from '../constants/strings'
import CardCarousel from './CardCarousel'
import RestaurantCard from './shared/RestaurantCard'
import { api } from '../api/client'
import { useMobile } from '../hooks/useMobile'


export default function PopularRestaurants() {
  const isMobile = useMobile()
  const [restaurants, setRestaurants] = useState<RestaurantDTO[]>([])

  useEffect(() => {
    api.restaurants.list().then(setRestaurants).catch(console.error)
  }, [])

  return (
    <section className="px-6 py-8">
      <div className="max-w-5xl mx-auto w-full">
      <h2 className={`mb-4 ${isMobile ? 'text-h2 text-left' : 'desktop-text-h2 text-center'}`}>{LABELS.popularRestaurants}</h2>
      <CardCarousel>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            chef={restaurant.chef}
            rating={restaurant.rating}
          />
        ))}
      </CardCarousel>
      <a href="/restaurants" className={`flex items-center gap-1 mt-4 text-body ${isMobile ? 'justify-start' : 'justify-end'}`}>
        {LABELS.allRestaurants} ≫
      </a>
      </div>
    </section>
  )
}
