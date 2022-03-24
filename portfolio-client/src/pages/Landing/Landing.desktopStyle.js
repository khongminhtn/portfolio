const style = {
  selfImage: (currentPage) => {
    return { 
      position: 'relative',
      transition: `1000ms ease-out`,
      top: `${currentPage === 0 ? '0vh' : '80vh'}`,
      opacity: `${currentPage === 0 ? '100%' : '0%'}`,
    }
  },

  IG: (currentPage) => {
    return { 
      position: 'relative',
      bottom: `${currentPage === 0 ? '0vh' : '50vh'}`,
      transition: `1000ms ease-out 200ms`,
    }
  },

  designer: (currentPage) => {
    console.log(currentPage)
    return {
      position: 'relative',
      bottom: currentPage === 0 ? '0vh' : '50vh',
      transition: `1000ms ease-out 400ms`,
    }
  }
}

export default style