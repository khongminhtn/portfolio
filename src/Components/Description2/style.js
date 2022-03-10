export const transition = (duration, currentPage, pageNumber) => {
  return {
    transition: `500ms ease-out 300ms`,
    opacity: currentPage === pageNumber ? '100%': 0
  }
}