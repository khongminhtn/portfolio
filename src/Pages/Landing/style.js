export const animation = (element, currentPage, duration) => {
  const transition = {
    'SelfImage': { 
      position: 'relative',
      top: `${currentPage === 0 ? '0vh' : '80vh'}`,
      transition: `${duration}ms ease-out`,
      opacity: `${currentPage === 0 ? '100%' : '0%'}`
    },

    'IG': { 
      position: 'relative',
      bottom: `${currentPage === 0 ? '0vh' : '50vh'}`,
      transition: `${duration}ms ease-out 200ms`,
    },

    'Designer': {
      position: 'relative',
      bottom: `${currentPage === 0 ? '0vh' : '50vh'}`,
      transition: `${duration}ms ease-out 400ms`
    }
  }

  return transition[element]
}