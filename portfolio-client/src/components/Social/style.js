export const copiedStyle = (copied, color) => ({ 
  transform: copied ? 'translateX(0)' : null,
  backgroundColor: color,
  color: color === 'black' ? 'white' : 'black',
})