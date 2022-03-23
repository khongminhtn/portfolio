import React from 'react'
import sass from './sass.module.scss'
import arrow from './asset/chevrons-down.svg'

const ArrowChev = () => {
  return (
    <img src={arrow} className={sass.arrow} alt="arrow logo"/>
  )
}

export default ArrowChev