import React from "react"

import sass from './sass.module.scss'
import selfImage from './assets/selfCompressed.png'

const SelfImage = ({style, handleScroll}) => {
  
  return (
    <>
      <img 
        src={selfImage} 
        alt="Self"
        className={sass.self}
        style={style}
        />
    </>
  )
}

export default SelfImage