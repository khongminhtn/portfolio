import React from 'react'
import './Button.css'

const Button = ({content}) => {
  return(
    <>
      <button className='Button'>{content}</button>
    </>
    )
}

export default Button