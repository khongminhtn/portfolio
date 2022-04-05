import { useState, useEffect } from 'react'
import _ from 'lodash'

const useSetMedia = () => {
  const [media, setMedia] = useState({
    tablet: {
      large: {
        landscape: false,
        portrait: false,
      }, 
      small: {
        landscape: false,
        portrait: false
      }
    },
    phone: {
      large: {
        landscape: false,
        portrait: false
      },
      medium: {
        landscape: false,
        portrait: false
      },
      small: {
        landscape: false,
        portrait: false
      },
      xsmall: { 
        landscape: false,
        portrait: false
      }
    }
  })

  useEffect(() => {
    const newMedia = {
      tablet: {
        large: {
          landscape: window.matchMedia('(max-width: 1367px)').matches 
            && window.matchMedia('(orientation: landscape)').matches,
          portrait: window.matchMedia('(max-width: 1025px)').matches
            && window.matchMedia('(orientation: portrait)').matches
        }, 
        small: {
          landscape: window.matchMedia('(max-width: 1135px)').matches 
            && window.matchMedia('(orientation: landscape)').matches,
          portrait: window.matchMedia('(max-width: 821px)').matches
            && window.matchMedia('(orientation: portrait)').matches
        }
      },
      phone: {
        large: {
          landscape: window.matchMedia('(max-width: 927px)').matches
            && window.matchMedia('(orientation: landscape)').matches,
          portrait: window.matchMedia('(max-width: 477px)').matches
            && window.matchMedia('(orientation: portrait)').matches
        },
        medium: {
          landscape: window.matchMedia('(max-width: 897px)').matches
            && window.matchMedia('(orientation: landscape)').matches,
          portrait: window.matchMedia('(max-width: 415px)').matches
            && window.matchMedia('(orientation: portrait)').matches
        },
        small: {
          landscape: window.matchMedia('(max-width: 927px)').matches
            && window.matchMedia('(orientation: landscape)').matches,
          portrait: window.matchMedia('(max-width: 376px)').matches
            && window.matchMedia('(orientation: portrait)').matches
        },
        xsmall: { 
          landscape: window.matchMedia('(max-width: 668px)').matches
            && window.matchMedia('(orientation: landscape)').matches,
          portrait: window.matchMedia('(max-width: 321px)').matches
            && window.matchMedia('(orientation: portrait)').matches
        }
      }
    }

    if (!_.isEqual(media, newMedia)) { 
      setMedia(newMedia)
    } 

    const listener = () => { 
      setMedia(newMedia)
    } 
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [media])

  return media
}

// Used by <App/>
export default useSetMedia