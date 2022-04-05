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

const CallToAction = ({header, subHeading, arrow, style, href, handleClick, headerStyle, subHeadingStyle, lineColor}) => {

  const arrowProps = {
    size: arrow.size,
    color: arrow.color,
    stroke: arrow.stroke
  }

  return (
    <div
    className={sass.container}
    style={style}
    onClick={handleClick}
    >
      <a 
        href={href}
        target='_blank'
        rel='noreferrer'
      style={{borderBottom: `1px solid ${lineColor}`}}>

        <h1 style={headerStyle}>
            { header }
        </h1>

        <Arrow {...arrowProps}/>

      </a>
      <h6 style={subHeadingStyle}>{subHeading}</h6>
    </div>
  )
}

CallToAction.propTypes = {
  header: PropTypes.string,
  subHeading: PropTypes.string,
  arrow: PropTypes.object,
  href: PropTypes.string,
  handleClick: PropTypes.func,
  lineColor: PropTypes.string,
  style: PropTypes.object,
  headerStyle: PropTypes.object,
  subHeadingStyle: PropTypes.object
}

CallToAction.defaultProps = {
  header: 'Call To Action',
  subHeading: 'Sub Heading',
  arrow: {
    size: 24,
    color: 'black',
    stroke: 2
  },
  style: {},
  href: 'www.google.com',
  handleClick: () => console.log('Call To Action executed'),
  color: 'black',

}

export default CallToAction