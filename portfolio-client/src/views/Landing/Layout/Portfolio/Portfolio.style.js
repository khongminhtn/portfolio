
const styles =  {
  header: ({phone}) => ({
    // Layout
    display: phone.large.portrait 
      ? 'block' 
      : phone.large.landscape 
      ? 'block' 
      : 'none',
    gridColumn: 1,
    gridRow: 1,
    alignSelf: phone.large.landscape 
      ? 'end' 
      : phone.large.portrait 
      ? 'start' 
      : null,
    justifySelf: phone.large.landscape 
      ? 'start' 
      : null,
    transformOrigin: phone.large.portrait 
      ? 'bottom left' 
      : null,
    transform: phone.large.landscape 
      ? 'translate(3vw, 8vh)'
      : phone.large.portrait
      ? 'rotate(90deg) translate(-12vh, 7.3vw)'
      : null,

    // Appearance
    fontSize: phone.large.portrait 
      ? '16vh' 
      : phone.large.landscape 
      ? '18vw' 
      : null,
    letterSpacing: phone.large.landscape 
      ? 2
      : phone.large.portrait
      ? 12
      : null
  })
}

export default styles