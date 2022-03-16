export const socialStyle = (currentPage) => ({
  transition: `500ms ease-out ${currentPage === 0 ? '0ms': '500ms'}`,
  opacity: currentPage === 0 ? '0%': '100%'
})



export const copiedStyle = (copied, color) => ({ 
  transform: copied ? 'translateX(0)' : null,
  backgroundColor: color,
  color: color === 'black' ? 'white' : 'black',
})