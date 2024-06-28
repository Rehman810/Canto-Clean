import React from 'react'
import "../css/button.css"

const Button = ({btn}) => {
  return (
    <div>
              <button className="button">{btn}</button>
    </div>
  )
}

export default Button
