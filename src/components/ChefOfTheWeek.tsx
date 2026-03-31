import { LABELS } from '../constants/strings'
import CardCarousel from './CardCarousel'
import RestaurantCard from './RestaurantCard'
import { chefs } from '../data/chefs'

const chef = chefs[0]

function ChefOfTheWeek() {
    return (
        <section className="bg-primary text-white px-6 py-8">
            <h2 className="font-bold font-primary text-lg mb-6">{LABELS.chefOfTheWeek}</h2>

            <div className="flex flex-col items-center mb-6">
                <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full max-w-sm aspect-square object-cover mb-4"
                />
                <h3 className="font-bold font-primary text-xl mb-2">{chef.name}</h3>
                <p className="font-primary text-sm leading-relaxed">{chef.bio}</p>
            </div>

            <h3 className="font-bold font-primary text-sm mb-4">
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
            <a href="/restaurants" className="flex items-center gap-1 mt-4 font-primary text-sm">
                {LABELS.allRestaurants} ≫
            </a>
        </section>
    )
}

export default ChefOfTheWeek