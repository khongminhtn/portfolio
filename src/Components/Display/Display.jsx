import React from "react"
import './style.modules.scss'

const Display = (props) => {
  return (
    <div
    className="display">
      {props.children}
    </div>
  )
}

export default Display