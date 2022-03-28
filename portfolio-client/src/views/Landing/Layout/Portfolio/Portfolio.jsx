import React from 'react'
import useSetMedia from '../../../../hooks/useSetMedia'
import { Header } from '../../../../components/index'
import styles from './Portfolio.style.js'

const Portfolio = () => {
  const media = useSetMedia()

  const headerProps = {
    content: 'PORTFOLIO',
    style: styles.header(media)
  }

  return (
    <>
      <Header {...headerProps}/>
    </>
  )
}

export default Portfolio