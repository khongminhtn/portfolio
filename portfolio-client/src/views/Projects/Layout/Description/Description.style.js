const styles = {
  subject: ({tablet}) => ({
    display: tablet.large.portrait ? 'none': null,
    // Gridding
    gridColumn: 1,
    gridRow: 1,
    alignSelf: 'start',
    justifySelf: tablet.large.portrait 
    ? 'center'
    : 'start',

    // Appearance
    fontSize: 18,
  }), 
  header: ({tablet}) => ({
    // Gridding
    gridColumn: 1,
    gridRow: 1,
    alignSelf: 'center',
    justifySelf: tablet.large.portrait 
    ? 'center'
    : 'start',
    
    // Positioning
    marginBottom: '150px',

    // Appearance
    fontSize: tablet.large.portrait 
    ? 80
    : tablet.large.landscape
    ? 80
    : 100,
  }),
  subHeading: ({tablet}) => ({
    // Gridding
    gridColumn: 1,
    gridRow: 1,
    alignSelf: 'center',
    justifySelf: tablet.large.portrait 
    ? 'center'
    : 'start',
    
    // Appearance
    fontSize: 20,
    fontWeight: 100,
  }),
  paragraph: ({tablet}) => ({
    // Gridding
    gridColumn: 1,
    gridRow: 1,
    alignSelf: 'center',
    justifySelf: tablet.large.portrait 
    ? 'center'
    : 'start',

    // Positioning
    marginTop: '200px',
    textAlign: tablet.large.portrait ? 'center' : null
  }),
  cta: ({tablet}) => ({
    display: tablet.small.portrait ? 'none': null,
    // Gridding
    gridColumn: 1,
    gridRow: 1,
    alignSelf: 'end',
    justifySelf: tablet.large.portrait 
    ? 'center'
    : 'start',

    // Appearance
    opacity: 0.5,
    textDecoration: 'underline'
  })
}

export default styles