import { useState } from 'react'

// Context
import { useStateValue } from '../../state/context'
import { setCurrentPage, setScrollTranslate } from '../../state/reducer'

export const NavBarLogic = (mainPages, subPages) => {
  // States Access
  const [hovered, setHovered] = useState(null)
  const { state, dispatch } = useStateValue()
  const { currentPage } = state.scroll

  // Work out correct page number for each main page
  // inclusive of subpages
  let previousPage = 0
  const pageNumbers = mainPages.map((mainPage, i) => {
    if (i === 0) {
      previousPage = 0
      return 0
    } else {
      previousPage = previousPage + subPages[i-1] + 1
      return previousPage
    }
  })

  // Event handlers for Ball and Content components
  const handleClick = (e) => {
    const page = parseInt(e.target.getAttribute('pagenumber'))
    dispatch(setCurrentPage(page))
    dispatch(setScrollTranslate(page * 100))
  }

  const handleMouseEnter = (e) => {
    setHovered(parseInt(e.target.getAttribute('pagenumber')))
  }

  const handleMouseLeave = (e) => {
    setHovered(null)
  }

  return {
    values: {
      hovered,
      currentPage,
      pageNumbers
    },
    handlers: {
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
    }
  }
}