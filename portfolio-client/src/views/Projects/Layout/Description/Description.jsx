import React from 'react'
import PropTypes from 'prop-types'
import useSetMedia from '../../../../hooks/useSetMedia'
import { Header, Paragraph } from '../../../../components'

import styles from './Description.style.js'
import sass from './Description.module.scss'


const Description = ({heading, subHeading, paragraph, subject}) => {
  const media = useSetMedia()

  const subjectProps = {
    content: subject,
    style: styles.subject(media)
  }

  const headerProps = {
    content: heading,
    style: styles.header(media)
  }

  const subHeadingProps = {
    content: subHeading,
    style: styles.subHeading(media)
  }

  const paragraphProps = {
    content: paragraph,
    style: styles.paragraph(media)
  }

  const ctaProps = {
    content: 'Explore',
    style: styles.cta(media)
  }

  return (
    <section className={sass.Description}>
      <Header {...subjectProps}/>
      <Header {...headerProps}/>
      <Header {...subHeadingProps}/>
      <Paragraph {...paragraphProps}/>
      <Header {...ctaProps}/>
    </section>
  )
}

Description.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  paragraph: PropTypes.string,
  subject: PropTypes.string
}

export default Description