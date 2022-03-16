import React from 'react'
// import PropTypes from 'prop-types'

// Hooks
import { useInterval,  useTimeString } from '../../hooks/index'

// Components
import { Description3 } from '../../components/index'

// Style
import sass from './sass/index.module.scss'

// Assets
import journey from './assets/img1.png'
import journey2 from './assets/img2.png'
import journey3 from './assets/img3.png'
import journey4 from './assets/img4.png'
const imageArray = [journey, journey2, journey3, journey4]

const About = () => {
  const time = useTimeString()
  const [index, setIndex] = React.useState(1)
  const [img, setImg] = React.useState(imageArray[0])
  const [opacity, setOpacity] = React.useState(1)

  useInterval(() => {
    setImg(imageArray[index])

    index === imageArray.length - 1 
    ? setIndex(0)
    : setIndex(index + 1)
    
    setTimeout(() => {
      setOpacity(1)
    }, 100)

    setTimeout(() => {
      setOpacity(0)
    }, 4900)
  }, 5000)

  return (
    <section className={sass.about}>
      <article
      className={sass['description-container']}>
        <Description3
          name='Tuyen Khong'
          paragraph={`Born and raised in Vietnam, 
          but currently live in London (${time}). 
          Tuyen graduated in Architecture at the 
          beginning of 2020, then took on management 
          roles for the family business in beauty 
          shortly before COVID-19. In his free time, 
          he studies web development, data structure and 
          algorithm to pursue his career in software engineering.`}

          paragraph1="Tuyen's desire to become a developer over 
          architecture was due to his natural curiosity in technology 
          and love for computers from childhood."/>
      </article>
      <img 
        className={sass.image}
        style={{
          transition: '100ms ease-out',
          opacity: opacity
        }}
        src={img} 
        alt='Architectural Work'/>
    </section>
  )
}

export default About