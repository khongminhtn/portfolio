import React from "react"

import sass from './SelfImage.module.scss'
import selfImage from './assets/selfCompressed.png'

const SelfImage = ({transitions}) => {
  /*
    Transitions is a CSS in JS controlled by the parent component
    that this component is plugged into.
  */
  
  return (
    <>
      <img 
        src={selfImage} 
        alt="Self"
        className={sass.self}
        style={transitions}
        />
    </>
  )
}

export default SelfImage