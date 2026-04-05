import Card from "./Card"
import { CURRENCY_SYMBOL } from '../constants/strings'
import type { IconType } from '../constants/strings'

interface DishCardProps {
    image: string
    name: string
    ingredients: string
    icon?: IconType
    price: number
}

export default function DishCard({ image, name, ingredients, icon, price }: DishCardProps) {
    return (
        <Card image={image} alt={name}>
            <div className="bg-secondary p-4">
                <h3 className="text-h3">{name}</h3>
                <p className="text-label mt-1">{ingredients}</p>
                {icon && (
                    <img
                        src={`/icons/${icon}.svg`}
                        alt={icon}
                        className="w-5 h-5 mt-2"
                    />
                )}
                <div className="mt-2 border-t border-gray pt-2">
                    <span className="text-body">{CURRENCY_SYMBOL}{price}</span>
                </div>
            </div>
        </Card>
    );
}
