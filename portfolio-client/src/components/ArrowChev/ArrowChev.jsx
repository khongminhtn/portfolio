import React from 'react'
import PropTypes from 'prop-types'
import sass from './ArrowChev.module.scss'
import arrow from './asset/chevrons-down.svg'

const ArrowChev = ({size, duration}) => {
  const styleFormated = {
    width: size,
    animationDuration: `${duration}ms`
  }

  return (
    <img 
    src={arrow}
    className={sass.arrow}
    style={styleFormated}
    data-testid="1"
    alt="arrow logo"/>
  )
}

ArrowChev.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  duration: PropTypes.number,
}

ArrowChev.defaultProps = {
  size: '20vw',
  duration: 500
}

export default ArrowChev