import React from 'react'
import useSetMedia from '../../../../hooks/useSetMedia'

import { Paragraph, Header, Email } from '../../../../components/index'

import sass from './Description.module.scss'
import styles from './Description.style.js'

const Description = () => {
  const media = useSetMedia()

  const nameProps = {
    content: 'Tuyen Khong',
    style: styles.name(media)
  }

  const designerProps = {
    content: 'Designer',
    style: styles.designer(media)
  }

  const developerProps = {
    content: 'Developer',
    style: styles.developer(media)
  }

  const pProps = {
    contents: [`Web developer with Architectural background.
    Knowledge in React, Redux, Node.js, Express.js,
    MongoDB, GraphQL and Typescript based in London.`],
    style: styles.paragraph(media)
  }

  const eProps = {
    content: 'tuyenminhkhong@live.co.uk',
    style: styles.email(media)
  }

  return (
    <section className={sass.Description}>
      <Header {...nameProps}/>
      <Header {...designerProps}/>
      <Header {...developerProps}/>
      <Paragraph {...pProps}/>
      <Email content='tuyenminhkhong@live.co.uk'/>
    </section>
  )
}

export default Description