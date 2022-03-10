import React from 'react'
import PropTypes from 'prop-types'

import sass from './description3.module.scss'

const Description3 = ({name, paragraph, paragraph1}) => {
  return (
    <article className={sass.description}>
      <h1 className={sass.heading}>{name}</h1>
      <p className={sass.paragraph}>{paragraph}</p>
      <p className={sass.paragraph1}>{paragraph1}</p>
    </article>
  )
}

Description3.propTypes = {
  name: PropTypes.string,
  paragraph: PropTypes.string,
  paragraph1: PropTypes.string
}

export default Description3