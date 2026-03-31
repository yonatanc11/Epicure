import Header from '../components/Header'
import Hero from '../components/Hero'
import IconsMeaning from '../components/IconsMeaning'
import PopularRestaurants from '../components/PopularRestaurants'
import SignatureDishes from '../components/SignatureDishes'
import ChefOfTheWeek from '../components/ChefOfTheWeek'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'


function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <PopularRestaurants />
            <SignatureDishes />
            <IconsMeaning />
            <ChefOfTheWeek />
            <AboutSection />
            <Footer />
        </>
    )
}

export default HomePage