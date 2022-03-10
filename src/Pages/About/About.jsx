import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Description3 } from '../../components/index'

// Style
import sass from './about.module.scss'

// Assets
import journey from './assets/img1.png'

const About = () => {
  return (
    <section className={sass.about}>
      <detail
      className={sass.detail}>
        <Description3
          name='Tuyen Khong'
          paragraph="Born and raised in Vietnam, but currently live in London (18:56:23). Tuyen graduated in Architecture at the beginning of 2020, then took on management roles for the family business in beauty shortly before COVID-19. In his free time, he studies web development, data structure and algorithm to pursue his career in software engineering."
          paragraph1="Tuyen's desire to become a developer over architecture was due to his natural curiosity in technology and love for computers from childhood."/>
      </detail>
      <img 
        className={sass.image}
        src={journey} 
        alt='Architectural Work'/>
    </section>
  )
}

export default About