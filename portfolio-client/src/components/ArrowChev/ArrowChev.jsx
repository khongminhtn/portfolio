import React from 'react'
import PropTypes from 'prop-types'
import sass from './ArrowChev.module.scss'

const ArrowChev = ({size, stroke, color}) => {
  const styleFormated = {
    height: size,
  }

  return (
    <svg 
    style={styleFormated}
    data-testid="1" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke={color}
    strokeWidth={stroke}
    strokeLinecap="round" 
    strokeLinejoin="round" >
      <polyline points="7 13 12 18 17 13"></polyline>
      <polyline points="7 6 12 11 17 6"></polyline>
    </svg>
  )
}

ArrowChev.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  duration: PropTypes.number,
}

ArrowChev.defaultProps = {
  size: '20vw',
  stroke: 1,
  color: 'black'
}

export default ArrowChev