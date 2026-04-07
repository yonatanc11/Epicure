import Card from "../shared/Card"
import { CURRENCY_SYMBOL } from '../../constants/strings'
import type { IconType } from '../../constants/strings'
import { ICONS } from '../../constants/icons'
import { useMobile } from '../../hooks/useMobile'

interface DishCardProps {
    image: string
    name: string
    ingredients: string
    icon?: IconType
    price: number
}

export default function DishCard({ image, name, ingredients, icon, price }: DishCardProps) {
    const isMobile = useMobile()

    return (
        <Card image={image} alt={name}>
            <div className="bg-secondary px-4 pt-3 pb-4 text-center flex flex-col items-center">
                <h3 className={isMobile ? 'text-h3' : 'desktop-text-h3'}>{name}</h3>
                <p className={`${isMobile ? 'text-label' : 'desktop-text-label'} mt-1 leading-snug`}>{ingredients}</p>
                {icon && (
                    <img
                        src={ICONS[`${icon}Small` as keyof typeof ICONS]}
                        alt={icon}
                        className="w-5 h-5 mt-3"
                    />
                )}
                <div className="mt-3 border-t border-gray/40 pt-3 w-full">
                    <span className={isMobile ? 'text-body' : 'desktop-text-body'}>{CURRENCY_SYMBOL}{price}</span>
                </div>
            </div>
        </Card>
    );
}
