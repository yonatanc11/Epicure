import { LABELS } from '../constants/strings'
import CardCarousel from './CardCarousel'
import RestaurantCard from './RestaurantCard'
import ChefProfile from './ChefProfile'
import { chefs } from '../data/chefs'

const chef = chefs[0]

function ChefOfTheWeek() {
    return (
        <section className="bg-primary text-white px-6 py-8">
            <h2 className="text-h2 text-white mb-6">{LABELS.chefOfTheWeek}</h2>

            <ChefProfile chef={chef} />

            <h3 className="text-h3 text-white mb-4">
                {LABELS.chefRestaurants(chef.name)}
            </h3>
            <CardCarousel>
                {chef.restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        image={restaurant.image}
                        name={restaurant.name}
                        chef={restaurant.chef}
                    />
                ))}
            </CardCarousel>
            <a href="/restaurants" className="flex items-center gap-1 mt-4 text-body text-white">
                {LABELS.allRestaurants} ≫
            </a>
        </section>
    )
}

export default ChefOfTheWeek