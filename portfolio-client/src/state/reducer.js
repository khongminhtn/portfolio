
// SCROLL
export const setScrollPause = (payload) => {
  return {
    type: 'SET_SCROLL_PAUSE',
    payload
  }
}

export const setCurrentPage = (payload) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload
  }
}

export const setScrollTranslate = (payload) => {
  return {
    type: 'SET_SCROLL_TRANSLATE',
    payload
  }
}

export const setTotalPages = (payload) => {
  return {
    type: 'SET_TOTAL_PAGES',
    payload
  }
} 


// DEFAULT SCROLL
export const setTop = (payload) => {
  return {
    type: 'SET_TOP',
    payload
  }
}


// TOUCH (DEPRECATED) 
export const setStart = (payload) => {
  return {
    type: 'SET_START',
    payload
  }
}




// Reducer
export const reducer = (state, {type, payload}) => {
  switch (type) {
    // SCROLL
    case "SET_SCROLL_PAUSE":
      return {
        ...state, 
        scroll: {...state.scroll, pause: payload}
      }
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        scroll: {...state.scroll, currentPage: payload}
      }
    case "SET_SCROLL_TRANSLATE":
      return {
        ...state,
        scroll: {...state.scroll, translate: payload }
      }
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        scroll: {...state.scroll, totalPages: payload}
      }

    // DEFAULT SCROLL
    case "SET_TOP":
      return {
        ...state,
        defaultScroll: {...state.defaultScroll, top: payload}
      }
      
    // TOUCH (DEPRECATED)
    case "SET_START":
      return {
        ...state,
        touch: { ...state.touch, start: payload}
      }
    default:
      return state
  }
}
