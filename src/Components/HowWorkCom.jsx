import React from 'react'
import Button from './Button'
import "../css/HowWork.css"

const HowWorkCom = ({img, step, desc, btn}) => {
  return (
    <div className='HowWork'>
      <img src={img} alt="img" />
      <span>{step}</span>
      <p>{desc}</p>
      {btn}
    </div>
  )
}

export default HowWorkCom
