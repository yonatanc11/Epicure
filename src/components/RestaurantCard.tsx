import Card from './Card'

interface RestaurantCardProps {
  image: string
  name: string
  chef: string
}

function RestaurantCard({ image, name, chef }: RestaurantCardProps) {
  return (
    <Card image={image} alt={name}>
      <div className="bg-secondary p-4">
        <h3 className="text-h3">{name}</h3>
        <p className="text-label">{chef}</p>
      </div>
    </Card>
  )
}

export default RestaurantCard