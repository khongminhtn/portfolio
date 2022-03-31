import React from 'react'
import PropTypes from 'prop-types'
import sass from './Header.module.scss'

const Header = ({content, style}) => {
  return (
    <h1
    className={sass.Header}
    style={style}
    >{content}</h1>
  )
}

Header.propTypes = {
  content: PropTypes.string,
  style: PropTypes.object
}

Header.defaultProps = {
  content: 'Header',
  style: {
    fontSize: 30,
    fontFamily: 'Roboto Condensed',
    fontWeight: 'bold',
    letterSpacing: 0,
    color: 'black',
  }
}

export default Header