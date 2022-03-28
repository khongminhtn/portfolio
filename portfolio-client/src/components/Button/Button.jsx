import React from 'react'
import sass from './button.module.scss'
import PropTypes from 'prop-types'

const Button = ({content, handleClick ,style}) => {
  return(
    <>
      <button 
      className={sass.button}
      style={style}
      onClick={handleClick}>
        {content}
      </button>
    </>
    )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default Button