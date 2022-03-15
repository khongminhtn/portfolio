import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import sass from './sass/index.module.scss'
import { slice1, slice2, navStyle } from './style'

const NavBarMobile = () => {
  const [toggled, setToggled] = React.useState(false)

  const handleBurger = () => {
    setToggled(!toggled)
  }

  return (
    <section className={sass.wrapper}>
      <div 
        className={sass.burger}
        onClick={handleBurger}>
        <span style={toggled ? slice1 : null}></span>
        <span style={toggled ? slice2 : null}></span>
      </div>
      <div 
        className={sass.nav}
        style={toggled ? navStyle: null}>
        <button>LANDING</button>
        <button>PROJECTS</button>
        <button>ABOUT</button>
        <button>HOBBY</button>
      </div>
    </section>
  )
}

export default NavBarMobile