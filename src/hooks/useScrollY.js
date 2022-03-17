import { useStateValue } from '../state/context'
import { 
  setScrollPause, 
  setCurrentPage, 
  setScrollTranslate, 
  setTotalPages} from '../state/reducer'

const useScrollY = () => {
  // Dependant on state.scroll
  const { state, dispatch } = useStateValue()
  const { currentPage, duration, pause } = { ...state.scroll }

  if (pause) {
    return () => {}
  }

  return (event, element) => {
    dispatch(setScrollPause(true))

    // Pages availble to scroll
    const totalPages = (element.current.clientHeight
      / window.innerHeight) - 1
    dispatch(setTotalPages(totalPages))

    // User wheel direction
    const userScrolledUp = event.deltaY < 0 ? true : false
    const userScrolledDown = event.deltaY > 0 ? true : false

    // Scroll to page and set new currentPage value based on interaction
    if (userScrolledUp & currentPage !== 0) {
      dispatch(setCurrentPage(currentPage - 1))
      dispatch(setScrollTranslate((currentPage - 1) * 100))
    } else if (userScrolledDown & currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1))
      dispatch(setScrollTranslate((currentPage + 1) * 100))
    }
    
    setTimeout(() => {
      dispatch(setScrollPause(false))
    }, duration)
  }
}


// Used by <Scrollable/>
export default useScrollY