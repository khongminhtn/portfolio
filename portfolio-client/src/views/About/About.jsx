import React from 'react'
// import PropTypes from 'prop-types'

// Components
import { Description, ImageSlider } from './Layout'

// Style
import sass from './About.module.scss'

const About = () => {
  return (
    <section className={sass.about}>
      <ImageSlider/>
      <Description/>
    </section>
  )
}

export default About