import React from 'react'
import PropTypes from 'prop-types'
import useSetMedia from '../../../../hooks/useSetMedia'
import { Paragraph, CallToAction } from '../../../../components'

import sass from './DescriptionMobile.module.scss'
import styles from './DescriptionMobile.style.js'

const DescriptionMobile = ({header, subHeading, paragraph}) => {
  const media = useSetMedia()

  const paragraphProps = {
    content: paragraph,
    style: styles.paragraph(media)
  }

  const callToActionProps = {
    header,
    subHeading,
    arrow: {
      size: 24,
      color: 'black',
      stroke: 2
    },
    layout: styles.cta(media)
  }

  return (
    <section className={sass.DescriptionMobile}>
      <Paragraph {...paragraphProps}/>
      <CallToAction {...callToActionProps}/>
    </section>
  )
}

DescriptionMobile.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  paragraph: PropTypes.string,
  layout: PropTypes.object
}

export default DescriptionMobile