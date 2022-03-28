import React from 'react'

// Context
import { useStateValue } from '../../../../state/context'
import { setCurrentPage, setScrollTranslate } from '../../../../state/reducer'

// Components
import { Button } from '../../../../components/index' 

// Styles
import sass from './ButtonContainer.module.scss'
import styles from './ButtonContainer.style.js'


const ButtonContainer = () => {
  const {dispatch} = useStateValue()

  const handleClick = () => {
    // Scroll to page 1 from page 0
    dispatch(setScrollTranslate(100))
    dispatch(setCurrentPage(1))
  }

  const buttonProps = {
    content: 'Explore',
    handleClick,
    style: styles.button()
  }

  return (
    <section className={sass.ButtonContainer}>
      <Button {...buttonProps}/>
    </section>
  )
}

export default ButtonContainer