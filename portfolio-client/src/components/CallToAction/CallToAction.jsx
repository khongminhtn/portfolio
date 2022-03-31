import React from 'react'
import PropTypes from 'prop-types'
import sass from './CallToAction.module.scss'

const Arrow = ({stroke, color, size}) => (
  <svg 
  className={sass.arrow}
  height={size} 
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

const CallToAction = ({header, subHeading, arrow, layout}) => {

  const arrowProps = {
    size: arrow.size,
    color: arrow.color,
    stroke: arrow.stroke
  }

  return (
    <div
    href='www.zoenail.com'
    className={sass.container}
    style={layout}
    >
      <a href='www.zoenails.com'>
        <h1>{ header }</h1>
        <Arrow {...arrowProps}/>
      </a>
      <h6>{subHeading}</h6>
    </div>
  )
}

CallToAction.propTypes = {
  header: PropTypes.string,
  subHeading: PropTypes.string,
  arrow: PropTypes.object
}

export default CallToAction