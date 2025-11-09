import Header from './components/Header'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Footer />
    </div>
  )
}

export default App
