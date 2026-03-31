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
        <h3 className="font-bold font-primary">{name}</h3>
        <p className="text-gray text-sm">{chef}</p>
      </div>
    </Card>
  )
}

export default RestaurantCard