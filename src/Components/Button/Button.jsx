import React from 'react'
import './Button.css'

const Button = ({content, handleClick}) => {
  return(
    <>
      <button 
      onClick={handleClick}
      className='button'>
        {content}
      </button>
    </>
    )
}

export default Button