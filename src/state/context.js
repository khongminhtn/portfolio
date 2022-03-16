import React, { createContext, useContext, useReducer } from 'react'

import { reducer } from './reducer'

const initialState = {
  // useScrollY, NavBar, Landing, NavBarMobile
  scroll: {
    pause: false,
    duration: 500,
    currentPage: 0,
    translate: 0,
    totalPages: 0,
  },
  
  // NavBarMobile
  pages: {
    landing: 0,
    projects: 1,
    about: 2,
    hobby: 3
  }
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
