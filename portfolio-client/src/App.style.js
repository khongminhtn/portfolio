const styles = {
  projectText: ({phone}, pages, currentPage) => ({
    // Positioning
    position: 'fixed',
    transformOrigin: 'bottom left',
    transform: 'rotate(90deg) translate(-12vh, 7.3vw)',

    // Appearance
    fontSize: '18vh',
    opacity: phone.large.portrait 
    && (currentPage === pages.projects)
    ? '5%' 
    : 0,

    // Transition
    transition: '1s ease-out'
  })
}

export default styles