const styles = {
  image: ({phone, tablet}, src) => {
    return {
      // Default gridding
      gridColumn: 1,
      gridRow: 1,
      alignSelf: 'center',
      justifySelf: 'center',
      
      // Positioning
      marginRight: phone.large.landscape
      ? '40vw' 
      : phone.large.portrait
      ? '25vw'
      : tablet.large.portrait
      ? 0
      : '25vw',
      marginBottom: phone.small.landscape
      ? 0
      : phone.large.landscape
      ? '20vh'
      : phone.large.portrait
      ? '20vh'
      : tablet.large.portrait
      ? '30vh'
      : 0,

      // Appearance
      border: phone.large.landscape || phone.large.portrait ? null : '7px solid black',
      borderRadius: phone.large.landscape || phone.large.portrait ? null : 30,
      boxShadow: phone.large.portrait || phone.large.landscape 
      ? '15px 15px 20px rgba(0, 0, 0, 0.2)'
      : '0px 8px 5px rgba(0, 0, 0, 0.7)',
      objectFit: 'cover',
      width: phone.large.portrait 
      ? '60vw' 
      : phone.large.landscape
      ? '40vw'
      : tablet.large.portrait
      ? '30vw'
      : tablet.large.landscape
      ? '25vw'
      : '55vw',
      height: phone.small.landscape
      ? '50vh'
      : phone.large.portrait 
      ? '55vh'
      : phone.large.landscape
      ? '60vh'
      : tablet.large.portrait
      ? '50vh'
      : '60vh',
    }
  }
}

export default styles