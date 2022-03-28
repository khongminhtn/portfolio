const styles = {
  image: (currentPage, {phone}, scrollTop) => {
    const percentOffset = phone.large.landscape ? 50 : 30
    const percent = 
      percentOffset 
      - (scrollTop / window.outerHeight) 
      * percentOffset
    
    const blurPx = (scrollTop / window.outerHeight) * 30


    return {
      position: phone.large.landscape || phone.large.portrait 
      ? null 
      : `relative`,
      transition: phone.large.landscape || phone.large.portrait 
        ? null 
        : `1000ms ease-out`,
      top: currentPage === 0 ? '0vh' : '80vh',
      opacity: phone.large.landscape || phone.large.portrait
        ? `${percent >= 0 ? percent : 0}%`
        : currentPage === 0 ? '100%' : '0%',
      filter: `blur(${blurPx}px)`
    }
  }
}

export default styles