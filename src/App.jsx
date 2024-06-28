import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import LuxuryServices from './Components/LuxuryServices'
import Testimonials from './Components/Textimonials'
import Services from './Components/ServiceCards'
import HowWorkCom from './Components/HowWork'
import Customerloyality from './Components/Customerloyality'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer'
import Text from "./Components/Text"

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LuxuryServices />
      <Services />
      <HowWorkCom />
      <Text />
      <Testimonials />
      <Customerloyality />
      <Footer />
    </div>
  )
}

export default App
