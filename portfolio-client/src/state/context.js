import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from './reducer'

// Assets
import cocktailImg from '../assets/cocktailNails.png'

const initialState = {
  // useScrollY, NavBar, Landing, NavBarMobile
  scroll: {
    pause: false,
    duration: 500,
    currentPage: 0,
    translate: 0,
    totalPages: 0,
  },

  // useScrollY, Landing
  defaultScroll: {
    top: 0,
  },

  // useScroll (DEPRECATED)
  touch: {
    start: { x: 0, y: 0}
  },
  
  // NavBarMobile
  pages: {
    landing: 0,
    projects: 1,
    about: 2
  },

  // Projects
  projects: {
    cocktailNails: {
      heading: 'Cocktail Nails',
      subHeading: 'Website Underconstruction',
      paragraph: "Supports communication between customers and technicians to resolve the language barrier. Functionality includes pricing, booking, resolving inquiries and information.",
      asset: cocktailImg,
      href: 'https://www.figma.com/proto/ce0UiNBdikQlUCTUEURgvO/Untitled?node-id=46%3A4&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A3',
      alt: 'cocktail nail',
      developed: false
    }
  },
}

const Context = createContext([initialState, () => initialState])

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <Context.Provider value = {{state, dispatch}}>
      {props.children}
    </Context.Provider>
  )
}

const useStateValue = () => useContext(Context)

export { ContextProvider, Context, useStateValue}
