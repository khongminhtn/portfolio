import React from 'react'
import PropTypes from 'prop-types'
import useSetMedia from '../../hooks/useSetMedia'

// Style
import sass from './projects.module.scss'

// Layout
import { Image, Description, DescriptionMobile } from './Layout'

const Projects = ({ alt, src, ...props }) => {
  const { phone} = useSetMedia()

  const descriptionProps = {
    header: props.heading,
    subHeading: props.subHeading,
    paragraph: props.paragraph,
    subject: props.subject
  }

  // CONDITIONAL COMPONENTS
  const cDescription = phone.large.landscape || phone.large.portrait 
  ? <DescriptionMobile {...descriptionProps}/>
  : <Description {...descriptionProps}/>

  return (
    <section className={sass.projects}>
      <Image 
      alt={alt} 
      src={src}/>

      {cDescription}
    </section>
  )
}

Projects.propTypes = {
  pageNumber: PropTypes.number,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  paragraph: PropTypes.string,
  cta: PropTypes.string
}

export default Projects