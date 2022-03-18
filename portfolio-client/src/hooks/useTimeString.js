import { useState, useEffect } from 'react'

const useTimeString = () => {
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

// Use by <About/>
export default useTimeString