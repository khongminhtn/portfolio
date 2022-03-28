import React from "react"
import useSetMedia from "../../../../hooks/useSetMedia"
import { useStateValue } from "../../../../state/context"

import sass from './SelfImage.module.scss'
import styles from './SelfImage.style.js'
import selfImage from '../../../../assets/selfCompressed.png'

const SelfImage = () => {
  const { state } = useStateValue()
  const { currentPage } = state.scroll
  const { top } = state.defaultScroll
  const media = useSetMedia()
  
  
  return (
    <>
      <img 
        src={selfImage} 
        alt="Self"
        className={sass.self}
        style={styles.image(currentPage, media, top)}
        />
    </>
  )
}

export default SelfImage