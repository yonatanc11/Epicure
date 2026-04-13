import { useEffect, useState } from 'react'
import type { ChefDTO } from '@epicure/shared'
import { LABELS } from '../../constants/strings'
import CardCarousel from '../CardCarousel'
import RestaurantCard from '../shared/RestaurantCard'
import ChefProfile from './ChefProfile'
import { api } from '../../api/client'
import { useMobile } from '../../hooks/useMobile'

function ChefOfTheWeek() {
    const isMobile = useMobile()
    const [chef, setChef] = useState<ChefDTO | null>(null)

    useEffect(() => {
        api.chefs.list().then((chefs) => setChef(chefs[0] ?? null)).catch(console.error)
    }, [])

    if (!chef) return null

    return (
        <section className="px-6 py-8 bg-white text-primary">
            <div className="max-w-5xl mx-auto w-full">
            <h2 className={`mb-6 ${isMobile ? 'text-h2' : 'desktop-text-h2 text-center'}`}>{LABELS.chefOfTheWeek}</h2>

            <ChefProfile chef={chef} />

            <h3 className={`mb-4 ${isMobile ? 'text-h3' : 'desktop-text-h2 text-left'}`}>
                {LABELS.chefRestaurants(chef.name)}
            </h3>
            <CardCarousel slidesPerView={{ mobile: 2, desktop: 5 }}>
                {chef.restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        image={restaurant.image}
                        name={restaurant.name}
                        chef=""
                        imageClass={isMobile ? 'aspect-video' : 'aspect-square'}
                        titleClass="text-[30px] font-normal leading-[47px] tracking-[2.67px] text-black"
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

export default ChefOfTheWeek