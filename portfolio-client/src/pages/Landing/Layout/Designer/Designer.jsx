import React from 'react'
import { useStateValue } from '../../../../state/context'
import useSetMedia from '../../../../hooks/useSetMedia'
import { Header } from '../../../../components/index'
import styles from './Designer.style.js'

const Designer = () => {
  const media = useSetMedia()
  const {state} = useStateValue()

  const headerProps = {
    content: `DESIGNER`,
    style: styles.header(media, state.scroll.currentPage)
  }

  return (
    <>
      <Header {...headerProps}/>
    </>
  )
}

export default Designer