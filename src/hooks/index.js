import { useState, useEffect, useRef } from 'react'
import { useStateValue } from '../state/context'
import { 
  setScrollPause, 
  setCurrentPage, 
  setScrollTranslate, 
  setTotalPages} from '../state/reducer'

export const useScrollY = () => {
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



export const useInterval = (callback, delay) => {
  // Create a ref
  const callbackRef = useRef()

  // Save callback to ref
  useEffect(() => {
    // Saved every time there changes to the call back
    callbackRef.current = callback
  }, [callback])


  useEffect(() => {
    // Access callback from ref
    const tick = () => callbackRef.current()

    // Run saved call back every tick
    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}



export const useTimeString = () => {
  const [time, setTime] = useState('')
  useEffect(() => {
    const secondTimer = setInterval(() => {
      const current = new Date()
      // current.getHours()}:${current.getMinutes()}:${current.getSeconds()
      setTime(`${current.toLocaleTimeString()}`)
    }, 1000)
    return () => {
      clearInterval(secondTimer)
    }
  }, [])

  return time
}



export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
  }, [matches, query])

  return matches
}