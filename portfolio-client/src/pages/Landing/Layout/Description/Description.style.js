const styles = {
  name: ({phone}) => ({
    margin: 0,
    fontSize: phone.large.portrait ? 24 : phone.large.landscape ? 16 :  20,
    fontWeight: 200,
    letterSpacing: 4,
    marginBottom: '2vh'
  }),
  designer: ({phone}) => ({
    display: phone.xsmall.landscape || phone.xsmall.portrait ? 'none' : 'block',
    fontSize: phone.large.landscape || phone.large.landscape ? 25 : 45,
  }),
  developer: ({phone}) => ({
    display: phone.xsmall.landscape || phone.xsmall.portrait ? 'none' : 'block',
    fontSize: phone.large.landscape ? 25 : phone.large.landscape ? 25 : 45,
    color: '#495390',
    marginBottom: '2vh'
  }),
  paragraph: ({phone}) => ({
    fontSize: phone.large.landscape || phone.large.portrait ? 16 : 20,
    marginBottom: '2vh'
  }),
  email: ({phone}) => ({
    display: phone.large.landscape || phone.large.portrait ? 'none' : 'block'
  })
}

export default styles