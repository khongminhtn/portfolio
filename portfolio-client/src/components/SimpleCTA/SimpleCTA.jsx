import React from 'react'
import PropTypes from 'prop-types'

import sass from './SimpleCTA.module.scss'



const Arrow = ({color, stroke}) => {

  return (
    <svg 
    className={sass.arrow}
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



const SimpleCTA = ({href, content, containerStyle, textStyle, arrow}) => {

  const arrowProps = {
    color: arrow.color,
    stroke: arrow.stroke
  }

  return (
    <div 
    className={sass.container}
    style={containerStyle}>
      <a 
        className={sass.content}
        href={href}
        target='_blank'
        rel='noreferrer'
        style={textStyle}>
          {content}
      </a>
      <Arrow { ...arrowProps }/>
    </div>
  )
}



SimpleCTA.propTypes = {
  href: PropTypes.string,
  content: PropTypes.string,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  arrow: PropTypes.object
}

Arrow.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.number
}

SimpleCTA.defaultProps = {
  href: 'https://www.google.com/',
  content: 'Link',
  containerStyle: {},
  textStyle: {},
  arrow: { color: 'black', stroke: 1 }
}

export default SimpleCTA