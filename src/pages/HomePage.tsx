import Header from '../components/NavBarSection/NavBar'
import Hero from '../components/HeroSection/Hero'
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