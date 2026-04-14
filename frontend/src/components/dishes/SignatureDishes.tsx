import { useEffect, useState } from 'react'
import type { DishDTO } from '@epicure/shared'
import { LABELS } from '../../constants/strings'
import CardCarousel from '../CardCarousel'
import DishCard from './DishCard'
import { api } from '../../api/client'
import { useMobile } from '../../hooks/useMobile'

export default function SignatureDishes() {
    const isMobile = useMobile()
    const [dishes, setDishes] = useState<DishDTO[]>([])

    useEffect(() => {
        api.dishes.list().then(setDishes).catch(console.error)
    }, [])

    return (
        <section className="px-6 py-8">
            <div className="max-w-5xl mx-auto w-full">
            <h2 className={`mb-4 ${isMobile ? 'text-h2 text-left' : 'desktop-text-h2 text-center'}`}>{LABELS.signatureDishes}</h2>
            <CardCarousel>
                {dishes.map((dish) => (
                    <DishCard
                        key={dish.id}
                        image={dish.image}
                        name={dish.name}
                        ingredients={dish.ingredients}
                        icon={dish.icon}
                        price={dish.price}
                        imageClass={isMobile ? 'aspect-video' : 'aspect-square'}
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

