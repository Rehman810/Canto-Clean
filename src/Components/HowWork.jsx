import React from 'react'
import HowWorkCom from './HowWorkCom'
import "../css/HowWork.css"
import img1 from "../assets/images/clock.png"
import img2 from "../assets/images/house.png"
import img3 from "../assets/images/bucket.png"
import Button from './Button'

const HowWork = () => {
  return (
    <div className='howWorkMain'>
      <HowWorkCom img={img1} step={"STEP 1"} desc={"You decide the date and time."} btn={<Button btn={"Book Now"}/>}/>
      <HowWorkCom img={img3} step={"STEP 2"} desc={"Select which service adequately suits your needs."} btn={<Button btn={"Services"}/>}/>
      <HowWorkCom img={img2} step={"STEP 3"} desc={"At your door step in a very short time."} btn={<Button btn={"Book Now"}/>}/>
    </div>
  )
}

export default HowWork
