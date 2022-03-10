export const socialTransition = (currentPage) => {
  return {
    transition: `500ms ease-out ${currentPage === 0 ? '0ms': '500ms'}`,
    opacity: currentPage === 0 ? '0%': '100%'
  }
}