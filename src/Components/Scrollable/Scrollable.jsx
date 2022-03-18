import React, { useRef } from "react"
import PropTypes from 'prop-types'

import { useStateValue } from "../../state/context"
import useScrollY from "../../hooks/useScrollY.js"

import sass from './scrollable.module.scss'
import { animation } from './style.js'


const Scrollable = (props) => {
  // props.children must be 100vh and 100vw
  const { state, } = useStateValue()
  const { translate, duration } = state.scroll
  const element = useRef()
  useScrollY(element, state.scroll, state.touch)

  return (
    <div
    className={sass.Scrollable}
    style={animation(translate, duration)}
    ref={element}>
      {props.children}
    </div>
  )
}

Scrollable.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Scrollable