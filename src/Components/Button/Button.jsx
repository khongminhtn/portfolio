import React from 'react'
import './Button.css'

const Button = ({content}) => {
  return(
    <>
      <button className='button'>{content}</button>
    </>
    )
}

export default Button