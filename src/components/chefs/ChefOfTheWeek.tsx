import { LABELS } from '../../constants/strings'
import CardCarousel from '../CardCarousel'
import RestaurantCard from '../RestaurantCard'
import ChefProfile from './ChefProfile'
import { chefs } from '../../data/chefs'
import { useMobile } from '../../hooks/useMobile'

const chef = chefs[0]

function ChefOfTheWeek() {
    const isMobile = useMobile()

    return (
        <section className="px-6 py-8 bg-white text-primary">
            <h2 className={`mb-6 ${isMobile ? 'text-h2' : 'desktop-text-h2 text-center'}`}>{LABELS.chefOfTheWeek}</h2>

            <ChefProfile chef={chef} />

            <h3 className={`mb-4 ${isMobile ? 'text-h3' : 'desktop-text-h2'}`}>
                {LABELS.chefRestaurants(chef.name)}
            </h3>
            <CardCarousel>
                {chef.restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        image={restaurant.image}
                        name={restaurant.name}
                        chef=""
                    />
                ))}
            </CardCarousel>
            <a href="/restaurants" className={`flex items-center gap-1 mt-4 text-body ${isMobile ? 'justify-start' : 'justify-end'}`}>
                {LABELS.allRestaurants} ≫
            </a>
        </section>
    )
}

export default ChefOfTheWeek