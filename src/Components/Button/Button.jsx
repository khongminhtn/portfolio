import React from 'react'
import './style.modules.scss'

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