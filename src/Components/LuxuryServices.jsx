import React from 'react'
import "../css/luxuryService.css"
import { FaRegCircleCheck } from "react-icons/fa6";

const LuxuryServices = () => {
  return (
    <div className='luxury'>
      <div className="lux-cont">
      <img src="https://img.freepik.com/premium-photo/woman-working-with-umbrella_1048944-23632701.jpg?w=900" alt="luxury service" />
      <div className='luxury-right'>
        <h2>LUXURY CLEANING SERVICE</h2>
        <ul>
            <li><FaRegCircleCheck color='#209DD7' size={15}/>&nbsp;Reliable, Detailed and Trustworthy Cleaning Service Technicians.</li>
            <li><FaRegCircleCheck color='#209DD7' size={15}/>&nbsp;5 star rated cleaning on Google.</li>
            <li><FaRegCircleCheck color='#209DD7' size={15}/>&nbsp;Friendly 24 hour customer support.</li>
            <li><FaRegCircleCheck color='#209DD7' size={15}/>&nbsp;Cleaning Supplies and Equipment Included</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default LuxuryServices
