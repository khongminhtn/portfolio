import React from "react"

import sass from './sass.module.scss'
import selfImage from './assets/selfCompressed.png'

const SelfImage = ({style}) => {
  
  return (
    <>
      <img 
        className={sass.self}
        style={style}
        src={selfImage} 
        alt="Self"
        />
    </>
  )
}

export default SelfImage