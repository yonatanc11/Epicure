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
            <div className={`bg-secondary px-4 pt-3 pb-4 flex flex-col flex-1 ${isMobile ? 'items-start text-left' : 'items-center text-center'}`}>
                <h3 className={isMobile ? 'text-h3' : 'desktop-text-h3'}>{name}</h3>
                {!isMobile && icon && (
                    <img
                        src={ICONS[`${icon}Small` as keyof typeof ICONS]}
                        alt={icon}
                        
                    />
                )}
                <p className={`${isMobile ? 'text-body' : 'desktop-text-body'} mt-1 leading-snug`}>{ingredients}</p>
                {isMobile && icon && (
                    <img
                        src={ICONS[`${icon}Small` as keyof typeof ICONS]}
                        alt={icon}
                    />
                )}
                <div className={`mt-auto pt-3 w-full ${isMobile ? '' : 'border-t border-gray/40'}`}>
                    <span className={isMobile ? 'text-body' : 'desktop-text-body'}>{CURRENCY_SYMBOL}{price}</span>
                </div>
            </div>
        </Card>
    );
}
