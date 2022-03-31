const styles = {
  paragraph: ({phone}) => ({
    display: phone.medium.portrait 
    || phone.xsmall.landscape 
    ? 'none' 
    : 'block',
    fontSize: 16
  }),
  cta: ({phone}) => ({
    marginTop: 16
  })
}

export default styles