import React from 'react'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import { ArrowChev } from '../../../../components/index'
import sass from './Arrow.module.scss'

const Arrow = () => {
  // Media query
  const largePhoneL = useMediaQuery('(max-width: 927px)')
  const isLandscape = useMediaQuery('(orientation: landscape)')
  
  // Props
  const arrowProps = {
    size: largePhoneL && isLandscape ? '10vw' : '20vw'
  }
  return (
    <section className={sass.Arrow}>
      <ArrowChev {...arrowProps}/>
    </section>
  )
}

export default Arrow