import React from 'react'
import "../css/heroSection.css"
import Button from './Button'

const HeroSection = () => {
  return (
    <div className='hero'>
      <div className='hero-container'> 
        <p>No. 1 Cleaning Company</p>
        <Button btn={"Book Now"}/>
      </div>
    </div>
  )
}

export default HeroSection
