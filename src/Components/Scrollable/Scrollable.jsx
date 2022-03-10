import React, { useRef } from "react"
import PropTypes from 'prop-types'

import sass from './scrollable.module.scss'
import { animation } from './style.js'

import { useScrollY } from "../../hooks/index"
import { useStateValue } from "../../state/context"

const Scrollable = (props) => {
  // props.children must be 100vh and 100vw
  const { state, } = useStateValue()
  const { translate, duration } = state.scroll
  const scrollY = useScrollY()
  const scrollable = useRef()

  const handleWheel = (event) => {
    scrollY(event, scrollable)
  }

  return (
    <div
    className={sass.Scrollable}
    style={animation(translate, duration)}
    ref={scrollable}
    onWheel={handleWheel}>
      {props.children}
    </div>
  )
}

Scrollable.propTypes = {
  children: PropTypes.array
}

export default Scrollable