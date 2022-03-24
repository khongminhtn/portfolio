import React from 'react'
import sass from './sass.module.scss'
import arrow from './asset/chevrons-down.svg'

const ArrowChev = ({transitions}) => {
  return (
    <img 
    src={arrow} 
    className={sass.arrow} 
    style={transitions}
    alt="arrow logo"/>
  )
}

export default ArrowChev