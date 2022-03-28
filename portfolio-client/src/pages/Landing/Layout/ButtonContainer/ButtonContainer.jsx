import React from 'react'

import { useStateValue } from '../../../../state/context'
import { setCurrentPage, setScrollTranslate } from '../../../../state/reducer'

import useSetMedia from '../../../../hooks/useSetMedia'
import { Button } from '../../../../components/index' 

import sass from './ButtonContainer.module.scss'
import styles from './ButtonContainer.style.js'

const ButtonContainer = () => {
  const {dispatch} = useStateValue()
  const media = useSetMedia()

  const handleClick = () => {
    // Scroll to page 1 from page 0
    dispatch(setScrollTranslate(100))
    dispatch(setCurrentPage(1))
  }

  const buttonProps = {
    content: 'Explore',
    handleClick,
    style: styles.button(media)
  }

  return (
    <section className={sass.ButtonContainer}>
      <Button {...buttonProps}/>
    </section>
  )
}

export default ButtonContainer