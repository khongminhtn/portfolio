import React from 'react'
import sass from './button.module.scss'
import PropTypes from 'prop-types'

const Button = ({content, handleClick}) => {
  return(
    <>
      <button 
      onClick={handleClick}
      className={sass.button}>
        {content}
      </button>
    </>
    )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button