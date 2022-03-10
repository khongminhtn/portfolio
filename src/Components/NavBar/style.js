export const contentTransition = (currentPage, pageNumber, subPages, hovered) => {
  const nextMainPage = pageNumber + subPages
  const mainPage = pageNumber

  const enlarge = {
    opacity: '100%',
    fontSize: 25
  }
  const highlight = {
    opacity: '100%'
  }

  return (
    (currentPage <= nextMainPage
      && currentPage >= mainPage )
      ? enlarge
      : hovered === pageNumber
      ? highlight
      : null
  )
}



export const ballTransition = (hovered, pageNumber, currentPage) => {
  const blckPg = 2 // Manual, dependent on mainPages and subPages
  return {
    backgroundColor: currentPage >= blckPg ? 'white' : 'black',
    width: hovered === pageNumber ? '20px' : '15px',
    height: hovered === pageNumber ? '20px' : '15px',
  }
}



export const lineTransition = (currentPage) => {
  const blckPg = 2 // Manual, dependent on mainPages and subPages
  console.log(currentPage >= blckPg ? 'white' : 'black')
  return {
    borderColor: currentPage >= blckPg ? 'white' : 'black'
  }
}



export const navBarStyle = (mainPages, currentPage) => {
  const gridRows = mainPages.reduce((prevVal, curVal, i) => {
    if (i === mainPages.length - 1) {
      return prevVal + ' 1fr'
    } else {
      return prevVal + ' 1fr 2fr'
    }
  }, '')

  const blckPg = 2 // Manual, dependent on mainPages and subPages

  return {
    // Grid properties
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridTemplateRows: gridRows,
    
    // Animation Properties
    transition: `500ms ease-out ${currentPage === 0 ? '0ms': '500ms'}`,
    opacity: currentPage === 0 ? '0%' : '100%',
    transform: currentPage === 0 ? 'translateY(-10vw)': 'translateX(0)',

    // Properties
    color: currentPage >= blckPg ? 'white' : 'black'
  }
}