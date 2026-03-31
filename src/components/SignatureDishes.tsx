import { LABELS } from '../constants/strings'
import CardCarousel from './CardCarousel'
import DishCard from './DishCard'
import { dishes } from '../data/dishes'

export default function SignatureDishes() {
    return (
        <section className="px-6 py-8">
            <h2 className="font-bold font-primary text-lg mb-4">{LABELS.signatureDishes}</h2>
            <CardCarousel>
                {dishes.map((dish) => (
                    <DishCard
                        key={dish.id}
                        image={dish.image}
                        name={dish.name}
                        ingredients={dish.ingredients}
                        icon={dish.icon}
                        price={dish.price}
                    />
                ))}
            </CardCarousel>
            <a href="/restaurants" className="flex items-center gap-1 mt-4 font-primary text-sm">
                {LABELS.allRestaurants} ≫
            </a>
        </section>
    )
}

