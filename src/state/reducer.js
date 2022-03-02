// Action Creators
// To be used as replacement of dispatch in components
export const changeDisplay = (payload) => {
  return {
    type: 'CHANGE_DISPLAY',
    payload
  }
}

// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DISPLAY":
      console.log('reducer.js|reducer',{...state, display: action.payload})
      return {...state, display: action.payload}
    default:
      return state
  }
}
