import starFull from '../../assets/icons/StarFull.svg'
import starEmpty from '../../assets/icons/StarEmpty.svg'

interface StarRatingProps {
  rating: number
  maxStars?: number
}

export default function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-0.5 mt-2">
      {Array.from({ length: maxStars }, (_, i) => (
        <img
          key={i}
          src={i < rating ? starFull : starEmpty}
          alt={i < rating ? 'filled star' : 'empty star'}
          className="w-5 h-5"
        />
      ))}
    </div>
  )
}
