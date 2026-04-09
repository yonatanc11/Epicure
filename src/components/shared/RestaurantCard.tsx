import Card from './Card'
import StarRating from './StarRating'
import { useMobile } from '../../hooks/useMobile'

interface RestaurantCardProps {
  image: string
  name: string
  chef: string
  rating?: number
  imageClass?: string
}

function RestaurantCard({ image, name, chef, rating, imageClass }: RestaurantCardProps) {
  const isMobile = useMobile()

  return (
    <Card image={image} alt={name} imageClass={imageClass}>
      <div className={`bg-secondary px-4 pt-3 pb-4 flex flex-col ${isMobile ? 'items-start text-left' : 'items-center text-center'}`}>
        <h3 className={isMobile ? 'text-h3' : 'desktop-text-body'}>{name}</h3>
        <p className={`${isMobile ? 'text-body' : 'desktop-text-body'} mt-1`}>{chef}</p>
        {!isMobile && rating !== undefined && <StarRating rating={rating} />}
      </div>
    </Card>
  )
}

export default RestaurantCard