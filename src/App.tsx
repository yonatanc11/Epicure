import RestaurantCard from './components/RestaurantCard'
import DishCard from './components/DishCard'
import CardCarousel from './components/CardCarousel'

function App() {
  return (
    <div className="p-8 max-w-md">
      <h2 className="font-bold mb-4">Restaurants</h2>
      <CardCarousel>
        <RestaurantCard image="https://placehold.co/400x300" name="Claro" chef="Ran Shmueli" />
        <RestaurantCard image="https://placehold.co/400x300" name="Lumia" chef="Meir Adoni" />
        <RestaurantCard image="https://placehold.co/400x300" name="Onza" chef="Yossi Shitrit" />
      </CardCarousel>

      <h2 className="font-bold mb-4 mt-8">Dishes</h2>
      <CardCarousel>
        <DishCard image="https://placehold.co/400x300" name="Pad Ki Mao" ingredients="Shrimps, Glass Noodles, Kemiri Nuts" icon="spicy" price={88} />
        <DishCard image="https://placehold.co/400x300" name="Garbanzo Frito" ingredients="Polenta fingers, magic chili cream" price={78} />
        <DishCard image="https://placehold.co/400x300" name="Smokey Fish" ingredients="Trout fillet, lemon butter, herbs" icon="vegetarian" price={65} />
      </CardCarousel>
    </div>
  )
}

export default App