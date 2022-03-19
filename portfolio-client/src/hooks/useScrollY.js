import { useEffect, useRef } from 'react'
import { useStateValue } from '../state/context'
import { 
  setScrollPause, 
  setCurrentPage, 
  setScrollTranslate, 
  setTotalPages,
  setStart } from '../state/reducer'



const useScrollY = (elementRef, scrollState, touchState) => {
  const { dispatch } = useStateValue()

  // REFERENCE STATES UPON CHANGES
  const scrollStatesRef = useRef()
  const touchStatesRef = useRef()
  useEffect(() => {
    scrollStatesRef.current = {
      pause: scrollState.pause,
      currentPage: scrollState.currentPage,
      duration: scrollState.duration 
    }
    touchStatesRef.current = {
      touchStart: touchState.start
    }
  }, [scrollState, touchState])


  // SET UP EVENTS
  useEffect(() => {
    const element = elementRef.current

    // HANDLE WHEEL
    const handleWheel = (event) => { 
      const { pause, currentPage, duration } = scrollStatesRef.current

      // Pages availble to scroll
      const totalPages = (elementRef.current.offsetHeight / window.innerHeight) - 1
      dispatch(setTotalPages(totalPages)) // ?
      console.log('changed')


      // Do nothing if pause is true
      if (pause) return null
      else dispatch(setScrollPause(true))

      // Scroll Direction
      const userScrolledUp = event.deltaY < 0 ? true : false
      const userScrolledDown = event.deltaY > 0 ? true : false

      // Scroll Execution
      if (userScrolledUp & currentPage !== 0) {
        dispatch(setCurrentPage(currentPage - 1))
        dispatch(setScrollTranslate((currentPage - 1) * 100))
      } else if (userScrolledDown & currentPage < totalPages) {
        dispatch(setCurrentPage(currentPage + 1))
        dispatch(setScrollTranslate((currentPage + 1) * 100)) }
      
      // Turn off pause
      setTimeout(() => dispatch(setScrollPause(false)), duration)
    }


    
    // HANDLE TOUCH START
    const handleTouchStart = (event) => { 
      const newStart = {
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY
      }
      dispatch(setStart(newStart))
    }



    // HANDLE TOUCH MOVE
    const handleTouchMove = (event) => { 
      event.preventDefault()
      const { pause, currentPage, duration } = scrollStatesRef.current

      // Pages availble to scroll
      const totalPages = (elementRef.current.clientHeight / window.innerHeight) - 1
      dispatch(setTotalPages(totalPages)) // ?


      // Do nothing if paused
      if ( pause ) return null

      // Get cordinates
      const { touchStart } = touchStatesRef.current
      const touchMove = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }

      // Calculate swipe distance
      const swipeDistance = Math.abs(touchMove.y - touchStart.y)

      // Pause scroll when swipe distance met
      if ( swipeDistance >= 50) dispatch(setScrollPause(true))
      
      // Swipe direction
      const userSwipedUp = (touchMove.y - touchStart.y < 0) 
      && swipeDistance >= 50
      ? true
      : false

      const userSwipedDown = (touchMove.y - touchStart.y > 0) 
      && swipeDistance >= 50
      ? true
      : false

      // Scroll Execution
      if (userSwipedDown & currentPage !== 0) {
        // Move page up
        dispatch(setCurrentPage(currentPage - 1))
        dispatch(setScrollTranslate((currentPage - 1) * 100))
      } else if (userSwipedUp & currentPage < totalPages) {
        // Move page down
        dispatch(setCurrentPage(currentPage + 1))
        dispatch(setScrollTranslate((currentPage + 1) * 100)) }
            
      // Turn off pause
      setTimeout(() => dispatch(setScrollPause(false)), duration)
    }


    // ATTACHING EVENTS
    element.addEventListener('wheel', handleWheel)
    element.addEventListener('touchstart', handleTouchStart)
    element.addEventListener('touchmove', handleTouchMove)
    // element.addEventListener('touchend', handleTouchEnd)
    console.log('Scroll events added')

    
    // CLEAR EVENTS
    return () => {
      element.removeEventListener('wheel', handleWheel)
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      // element.removeEventListener('touchend', handleTouchEnd)
    }

  }, [])
}

export default useScrollY