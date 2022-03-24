const styleMobile = {
  selfImage: (scrollTop, isLandscape) => {
    const percentOffset = isLandscape ? 50 : 30
    const percent = 
      percentOffset 
      - (scrollTop / window.outerHeight) 
      * percentOffset
    
    const blurPx = (scrollTop / window.outerHeight) * 30

    return { 
      // Animation
      filter: `blur(${blurPx}px)`,
      opacity: `${percent >= 0 ? percent : 0}%` 
    }
  },
  

  arrowChev: (currentPage) => {
    return {
      transition: `1000ms ease-out`,
      transform: currentPage !== 0 ? `translateY(-100vh)` : null
    }
  }
}

export default styleMobile