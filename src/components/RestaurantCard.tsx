import Card from './Card'

interface RestaurantCardProps {
  image: string
  name: string
  chef: string
}

function RestaurantCard({ image, name, chef }: RestaurantCardProps) {
  return (
    <Card image={image} alt={name}>
      <div className="bg-secondary px-4 pt-3 pb-4">
        <h3 className="text-h3">{name}</h3>
        <p className="text-label mt-1">{chef}</p>
      </div>
    </Card>
  )
}

export default RestaurantCard