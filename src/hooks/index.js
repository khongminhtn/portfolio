import { useState, useEffect } from 'react'
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



export const useCycleImg = (imageArray, duration) => {
  const [img, setImg] = useState(imageArray[0])
  const [index, setIndex] = useState(1)

  useEffect(() => {
      const imgCycle = setTimeout(() => {
      setImg(imageArray[index])
      if (index === imageArray.length - 1){
        // Reset on last image
        setIndex(0)
      } else {
        // Select next image
        setIndex(index + 1)
      }
    }, duration)

    
    return () => {
      clearTimeout(imgCycle)
    }
  }, [img, index, duration, imageArray])
  return img
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



export const useOpacityCycle = (img) => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const opacityOff = setTimeout(() => {
      setOpacity(0)
    }, 4900)

    const opacityOn = setTimeout(() => {
      setOpacity(1)
    }, 5100)

    return () => clearTimeout([opacityOff, opacityOn])
  },[img])

  return opacity
}
