import React from 'react'
import PropTypes from 'prop-types'

import sass from './sass.module.scss'

// Background Texts
const BGText = ({text}) => {
  return(
    <h1 className={sass.bgtext}>{text}</h1>
  )
}

BGText.propTypes = {
  text: PropTypes.string
}

export default BGText