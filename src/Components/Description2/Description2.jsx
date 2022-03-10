import React from 'react'
import PropTypes from 'prop-types'
import { useStateValue } from '../../state/context'

// Style
import sass from './description2.module.scss'
import { transition } from './style'

const CallToAction = ({content}) => {
  return (
    <section className={sass.cta}>
      {content}
    </section>
  )
}

const Paragraph = ({content}) => {
  return (
    <p className={sass.paragraph}>
      {content}
    </p>
  )
}

const SubHeading = ({content}) => {
  return (
    <h6 className={sass.subHeading}>
      {content}
    </h6>
  )
}

const Heading = ({content}) => {
  return (
    <h1 className={sass.heading}>
      {content}
    </h1>
  )
}

const Subject = ({content}) => {
  return (
    <h3 className={sass.subject}>
      {content}
    </h3>
  )
}

const Description2 = ({
  pageNumber, 
  subject, 
  heading, 
  subHeading, 
  paragraph,
  cta}) => {
  const { state } = useStateValue()
  const { currentPage, duration } = state.scroll

  return(
    <article 
    className={sass.description}
    style={transition(duration, currentPage, pageNumber)}>
      <Subject content={subject}/>
      <Heading content={heading}/>
      <SubHeading content={subHeading}/>
      <Paragraph content={paragraph}/>
      <CallToAction content={cta}/>
    </article>
  )
}

Description2.propTypes = {
  subject: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  paragraph: PropTypes.string,
  cta: PropTypes.string
}



export default Description2