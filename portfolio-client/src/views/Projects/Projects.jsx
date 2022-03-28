import React from 'react'
import PropTypes from 'prop-types'

// Style
import sass from './projects.module.scss'

// Components
import { Description2, Screen } from '../../components/index'

const Projects = ({
  pageNumber,
  heading,
  subHeading,
  paragraph,
  cta,
  asset
}) => {
  return (
    <section className={sass.projects}>
      <Screen src={asset}/>
      <Description2
        pageNumber={pageNumber}
        subject="PROJECTS"
        heading={heading}
        subHeading={subHeading}
        paragraph={paragraph}
        cta={cta}/>
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