import { useEffect, useRef } from 'react'

const useInterval = (callback, delay) => {
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

// Used by <About/>
export default useInterval