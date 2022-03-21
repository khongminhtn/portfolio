import React from 'react'
import { useStateValue } from '../../state/context'

import sass from './sass.module.scss'

const MobileConsole = () => {
  const { state } = useStateValue()
  const [message, setMessage] = React.useState()

  React.useEffect(() => {
  setMessage(`deviceRatio: ${window.devicePixelRatio}, 
    innerHeight: ${window.innerHeight}, 
    innerWidth: ${window.innerWidth}, 
    outerHeight: ${window.outerHeight}, 
    outerWidth: ${window.outerWidth}, 
    visualVP: ${window.visualViewport.height} ${window.visualViewport.width}, 
    screenX: ${window.screenX}, 
    screenY: ${window.screenY}, 
    screen: ${window.screen.width} ${window.screen.height},
    totalPages: ${state.scroll.totalPages}, 
    currentPage: ${state.scroll.currentPage}`)
  })

  return (
    <section className={sass['mobile-console']}>
      {
        message
      }
    </section>
  )
}

export default MobileConsole