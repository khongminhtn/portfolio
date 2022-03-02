import React, { createContext, useContext, useReducer } from 'react'

import { reducer } from './reducer'

const initialState = {display: "landing"}
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
