import React from 'react'
import PropTypes from 'prop-types'
import sass from './Paragraph.module.scss'

const Paragraph = ({content, style}) => {
  return (
    <p 
    className={sass.paragraph}
    style={style}
    data-testid='1'
    >
      {content}
    </p>
  )
}

Paragraph.propTypes = {
  content: PropTypes.string,
  style: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
  })
}

Paragraph.defaultProps = {
  content: 'Paragraph',
  style: {
    fontSize: 16,
    fontFamily: 'Roboto Condensed',
    fontWeight: 'light',
    letterSpacing: 1,
    color: 'black',
  }
}

export default Paragraph