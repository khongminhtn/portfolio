import React from 'react'
import PropTypes from 'prop-types'
import sass from './Paragraph.module.scss'

const Paragraph = ({contents, style}) => {
  return (
    <p 
    className={sass.paragraph}
    style={style}
    data-testid='1'
    >
      {
        contents.length > 1 
        ? contents.map((content, i) => <React.Fragment key={i}>
          {content}<br/><br/>
        </React.Fragment>)
        : contents[0]
      }
    </p>
  )
}

Paragraph.propTypes = {
  contents: PropTypes.array,
  style: PropTypes.object
}

Paragraph.defaultProps = {
  contents: ['Paragraph'],
  style: {
    fontSize: 16,
    fontFamily: 'Roboto Condensed',
    fontWeight: 'light',
    letterSpacing: 1,
    color: 'black',
  }
}

export default Paragraph