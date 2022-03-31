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
  style: PropTypes.object
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