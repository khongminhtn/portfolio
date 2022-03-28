const styles = {
  header: ({tablet}, currentPage) => ({
    display: tablet.large.portrait || tablet.small.landscape ? 'none' : 'block',
    // Positioning
    gridColumn: 1,
    gridRow: 1,
    alignSelf: 'center',
    justifySelf: 'center',

    // Appearance
    fontWeight: 'bold',
    fontSize: '10vw',
    color: 'white',
    letterSpacing: '6vw',
    textShadow: '10px 10px 25px rgba(0, 0, 0, 0.2)',

    // Animation
    opacity: 0,
    animation: 'moveUp 1s ease-out 0s 1 normal forwards',

    // Transitions
    transition: `2000ms ease-out`,
    position: 'relative',
    bottom: currentPage === 0 ? '0vh' : '100vh',
  })
}

export default styles