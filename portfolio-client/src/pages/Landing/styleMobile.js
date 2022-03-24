const styleMobile = {
  selfImage: (scrollTop) => {
    const percent = (20 - (scrollTop / window.outerHeight) * 20)
    return { opacity: `${percent >= 0 ? percent : 0}%` }
  }
}

export default styleMobile