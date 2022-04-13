import React from 'react'
import PropTypes from 'prop-types'
import useSetMedia from '../../../../hooks/useSetMedia'
import { Paragraph, CallToAction } from '../../../../components'

import sass from './DescriptionMobile.module.scss'
import styles from './DescriptionMobile.style.js'

const DescriptionMobile = ({header, subHeading, paragraphs, href}) => {
  const media = useSetMedia()

  // DECPRECATED
  // const paragraphProps = {
  //   contents: paragraphs,
  //   style: styles.paragraph(media)
  // }

  const callToActionProps = {
    header,
    subHeading,
    arrow: {
      size: 24,
      color: 'black',
      stroke: 2
    },
    style: styles.cta(media),
    href: href
  }

  return (
    <section className={sass.DescriptionMobile}>
      {/* <Paragraph {...paragraphProps}/>  // DEPRECATED*/} 
      <CallToAction {...callToActionProps}/>
    </section>
  )
}

DescriptionMobile.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  paragraphs: PropTypes.array,
  layout: PropTypes.object,
  href: PropTypes.string
}

export default DescriptionMobile