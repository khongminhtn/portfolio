import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useStateValue } from '../../state/context'
import { setCurrentPage, setScrollTranslate } from '../../state/reducer'

import sass from './sass/index.module.scss'
import { burgerStyle, navStyle } from './style'


// Presentational Components
const Burger = ({toggled, handleClick, color}) => {
  const { slice1, slice2 } = burgerStyle

  return (
    <div 
      className={sass.burger}
      onClick={handleClick}>
      <span style={slice1(color, toggled)}></span>
      <span style={slice2(color, toggled)}></span>
    </div>
  )
}



const Nav = ({toggled, pageNames, pageNumbers, handleClick}) => {

  return (
    <div 
      className={sass.nav}
      style={toggled ? navStyle: null}>

      {
        pageNames.map((pageName, i) => 
          <button 
          key={pageName} 
          number={pageNumbers[i]}
          onClick={handleClick}>
            {pageName.toUpperCase()}
          </button>
        )
      }

    </div>
  )
}



// Logic and Layout Component
const NavBarMobile = () => {
  // States
  const { state, dispatch } = useStateValue()
  const { pages } = state
  const { currentPage } = state.scroll

  const [toggled, setToggled] = React.useState(false)


  // Props
  const burgerProps = {
    toggled,
    handleClick: () => setToggled(!toggled),
    color: currentPage === pages.landing 
      ? 'transparent' 
      : currentPage === pages.about 
      ? 'white' 
      : 'black'
  }

  const navProps = {
    toggled,
    pageNames: Object.keys(pages),
    pageNumbers: Object.values(pages),
    handleClick: (e) => {
      const pageNumber = parseInt(e.target.getAttribute('number'))
      console.log(pageNumber)
      setToggled(!toggled)
      dispatch(setCurrentPage(pageNumber))
      dispatch(setScrollTranslate(pageNumber * 100))
    }
  }

  // Output
  return (
    <section className={sass.container}>
      <Burger {...burgerProps}/>
      <Nav {...navProps}/>
    </section>
  )
}


// PropTypes
Burger.propTypes = {
  toggled: PropTypes.bool,
  handleClick: PropTypes.func,
  color: PropTypes.string
}

Nav.propTypes = { 
  toggled: PropTypes.bool,
  pageNames: PropTypes.arrayOf(PropTypes.string),
  pageNumbers: PropTypes.arrayOf(PropTypes.number),
  handleClick: PropTypes.func
}



export default NavBarMobile