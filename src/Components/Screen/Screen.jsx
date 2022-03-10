import React from 'react'

// Style
import sass from './screen.module.scss'

const Screen = ({src}) => {
  return (
    <img 
      className={sass.screen}
      src={src} 
      alt="Home Page"/>
  )
}

export default Screen