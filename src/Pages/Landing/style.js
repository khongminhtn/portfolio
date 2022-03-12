export const animation = (element, currentPage, duration) => {
  switch (element) {
    case 'SelfImage':
      return { 
        position: 'relative',
        top: `${currentPage === 0 ? '0vh' : '80vh'}`,
        transition: `${duration}ms ease-out`,
        opacity: `${currentPage === 0 ? '100%' : '0%'}`
      }
    case 'IG':
      return { 
        position: 'relative',
        bottom: `${currentPage === 0 ? '0vh' : '50vh'}`,
        transition: `${duration}ms ease-out 200ms`,
      }
    case 'Designer':
      return { 
        position: 'relative',
        bottom: `${currentPage === 0 ? '0vh' : '50vh'}`,
        transition: `${duration}ms ease-out 400ms`
      }
    default: 
      break
  }
}