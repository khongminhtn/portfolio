import React from 'react'
import PropTypes from 'prop-types'
import { NavBarLogic } from './NavBarLogic'

// Styling
import sass from './sass/index.module.scss'
import { 
  contentTransition, 
  navBarStyle, 
  ballTransition, 
  lineTransition } from './style.js'


const Ball = ({
  pageNumber, 
  handleClick,
  handleMouseEnter, 
  handleMouseLeave,
  ballTransition}) => {

  return (
    <div 
      className={sass.ball}
      pagenumber={pageNumber}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={ballTransition}></div>
  )
}


const Content = ({ 
  mainPage, 
  pageNumber, 
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  contentTransition
}) => {

  return (
    <div
      className={sass.content}
      pagenumber={pageNumber}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={contentTransition}>{mainPage}</div>
  )
}


const Line = ({lineTransition}) => {
  return (
    <div 
    className={sass.line}
    style={lineTransition}></div>
  )
}

// scss grid lines variables require update upon changes 
// to mainPages and subPages props
const NavBar = ({mainPages, subPages}) => {
  const { values, handlers } = NavBarLogic(mainPages, subPages)
  const { hovered, currentPage, pageNumbers } = values
  const { handleClick, handleMouseEnter, handleMouseLeave } = handlers

  // If there is only 1 page
  if (mainPages.length === 1) {
    return null
  }

  // Draw up lines and circles
  return(
    <nav 
    className={sass.navBar}
    style={navBarStyle(mainPages, currentPage)}>
      {
        mainPages.map((mainPage, i) => {
          // on main page
          if (i === mainPages.length - 1) {
            return (
              <React.Fragment key={mainPage}>
                <Ball 
                  pageNumber={pageNumbers[i]}
                  handleClick={handleClick}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  ballTransition={ballTransition(hovered, pageNumbers[i], currentPage)}/>
                <Content 
                  pageNumber={pageNumbers[i]}
                  mainPage={mainPage}
                  handleClick={handleClick}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  contentTransition={contentTransition(currentPage, pageNumbers[i], subPages[i], hovered)}/>
              </React.Fragment>
            )
          }

          return(
            <React.Fragment key={mainPage}>
              <Ball 
                pageNumber={pageNumbers[i]}
                handleClick={handleClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                ballTransition={ballTransition(hovered, pageNumbers[i], currentPage)}/>
              <Content 
                pageNumber={pageNumbers[i]}
                mainPage={mainPage}
                handleClick={handleClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                contentTransition={contentTransition(currentPage, pageNumbers[i], subPages[i], hovered)}/>
              <Line lineTransition={lineTransition(currentPage)}/> 
            </React.Fragment>
          )
        })
      }
    </nav>
  )
}

NavBar.propTypes = {
  mainPages: PropTypes.arrayOf(PropTypes.string).isRequired,
  subPages: PropTypes.arrayOf(PropTypes.number).isRequired
}

Ball.propTypes = {
  pageNumber: PropTypes.number,
  handleClick: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  ballTransition: PropTypes.object,
}

Content.propTypes = {
  pageNumber: PropTypes.number,
  mainPage: PropTypes.string,
  handleClick: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  contentTransition: PropTypes.object
}

export default NavBar