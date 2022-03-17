import React, { useRef } from "react"
import PropTypes from 'prop-types'

import { useStateValue } from "../../state/context"
import useScrollY from "../../hooks/useScrollY"

import sass from './scrollable.module.scss'
import { animation } from './style.js'


const Scrollable = (props) => {
  // props.children must be 100vh and 100vw
  const { state, } = useStateValue()
  const { translate, duration } = state.scroll
  const scrollY = useScrollY()
  const scrollable = useRef()

  const handleWheel = (e) => scrollY(e, scrollable)
  const handleTouchStart = (e) => {console.log('START', e.touches[0])}
  const handleTouchMove = (e) => {console.log('MOVE', e.touches[0])}
  const handleTouchEnd = (e) => {console.log('END', e.changedTouches[0])}
  
  return (
    <div
    className={sass.Scrollable}
    style={animation(translate, duration)}
    ref={scrollable}
    onWheel={handleWheel}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}>
      {props.children}
    </div>
  )
}

Scrollable.propTypes = {
  children: PropTypes.array
}

export default Scrollable