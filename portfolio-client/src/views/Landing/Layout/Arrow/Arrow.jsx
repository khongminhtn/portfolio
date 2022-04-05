import React from 'react'
import { useStateValue } from '../../../../state/context'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import { ArrowChev } from '../../../../components/index'

import styles from './Arrow.style.js'
import sass from './Arrow.module.scss'

const Arrow = () => {
  // States
  const { state } = useStateValue()
  const { currentPage } = state.scroll
  const { landing } = state.pages

  // Media query
  const largePhoneL = useMediaQuery('(max-width: 927px)')
  const isLandscape = useMediaQuery('(orientation: landscape)')
  
  // Props
  const arrowProps = {
    size: largePhoneL && isLandscape ? '10vw' : '20vw'
  }

  return (
    <section 
    className={sass.Arrow}
    style={styles.arrow(currentPage, landing)}>
      <ArrowChev {...arrowProps}/>
    </section>
  )
}

export default Arrow