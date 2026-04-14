import Card from './Card'
import StarRating from './StarRating'
import { useMobile } from '../../hooks/useMobile'

interface RestaurantCardProps {
  image: string
  name: string
  chef: string
  rating?: number
  imageClass?: string
  titleClass?: string
}

function RestaurantCard({ image, name, chef, rating, imageClass, titleClass }: RestaurantCardProps) {
  const isMobile = useMobile()

  return (
    <Card image={image} alt={name} imageClass={imageClass}>
      <div className={`bg-secondary px-4 pt-3 pb-4 flex flex-col flex-1 justify-center ${isMobile ? 'items-start text-left' : 'items-center text-center'}`}>
        <h3 className={isMobile ? 'text-h3' : (titleClass || 'desktop-text-h3')}>
          {name}
        </h3>
        {chef && (
          <p className={`${isMobile ? 'text-body' : 'desktop-text-body'} mt-1`}>{chef}</p>
        )}
        {!isMobile && rating !== undefined && <StarRating rating={rating} />}
      </div>
    </Card>
  )
}

export default RestaurantCard