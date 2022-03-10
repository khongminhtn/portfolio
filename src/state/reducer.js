
// SCROLL STATES
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
    default:
      return state
  }
}
