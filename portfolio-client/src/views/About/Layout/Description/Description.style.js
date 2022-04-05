const styles = {
  header: ({phone, tablet}) => ({
    color: 'white',
    fontSize: phone.large.portrait || phone.large.landscape
    ? 48 
    : tablet.large.portrait || tablet.large.landscape
    ? 80 
    : 100,
    marginBottom: phone.large.landscape ? 32 : 48 
  }),
  paragraph: ({phone}) => ({
    color: 'white',
    fontSize: phone.large.portrait || phone.large.landscape ? 16 : 20,
    fontWeight: 100,
    marginBottom: phone.large.landscape ? 0 : 48 
  }),
  cta: ({phone}) => ({
    display: phone.xsmall.portrait || phone.xsmall.landscape ? 'none' : null,
    color: 'white'
  }),
  copied: ({phone}) => ({
    backgroundColor: 'white',
    color: 'black',
    fontSize: phone.large.portrait ? 50 : 68,
    fontWeight: 100,
    textAlign: 'center'
  }),
  ctaHeader: ({phone}) => ({
    color: 'white',
    fontWeight: 100,
  }),
  ctaSubHeader: ({phone}) => ({
    fontSize: phone.large.portrait || phone.large.landscape ? 16 : 20
  })
}

export default styles