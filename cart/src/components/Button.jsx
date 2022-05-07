import React from 'react'
import  "./Button.module.css"
function Button({btn}) {
  return (
    <div id="checkoutbutton">
      {btn.value}
    </div>
  )
}

export default Button
