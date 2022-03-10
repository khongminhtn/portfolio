import React from 'react'
import PropTypes from 'prop-types'
import { useStateValue } from '../../state/context'

// States
import sass from './social.module.scss'
import { socialTransition } from './style'


// Assets
import emailBlack from './assets/email-black.png'
import emailWhite from './assets/email-white.png'
import githubBlack from './assets/github.png'
import githubWhite from './assets/github-white.png'
import linkedinBlack from './assets/linkedin.png'
import linkedinWhite from './assets/linkedin-white.png'
import codepenBlack from './assets/codepen-black.png'
import codepenWhite from './assets/codepen-white.png'

const Social = () => {
  const { state } = useStateValue()
  const { currentPage } = state.scroll

  // Manual page selection to turn social icons to white
  const blckPg = 2

  return(
    <section 
    className={sass.social}
    style={socialTransition(currentPage)}>
      <img 
      className={sass.email} 
      alt='email'
      src={ currentPage >= blckPg ? emailWhite : emailBlack }/> 

      <a
      href='https://github.com/khongminhtn'
      target='_blank'
      rel='noreferrer'>
        <img 
        className={sass.github} 
        alt='github'
        src={ currentPage >= blckPg ? githubWhite : githubBlack }/>
      </a>

      <a
      href='https://www.linkedin.com/in/tuyenkhongarch/'
      target='_blank'
      rel='noreferrer'>
        <img 
        className={sass.linkedin} 
        src={currentPage >= blckPg ? linkedinWhite: linkedinBlack} 
        alt='linkedin'/>
      </a>

      <a
      href='https://codepen.io/khongminhtn'
      target='_blank'
      rel='noreferrer'>
        <img 
        className={sass.codepen} 
        src={currentPage >= blckPg ? codepenWhite : codepenBlack} 
        alt='codepen'/>
      </a>
    </section>
  )
}

Social.propTypes = {
  // color: PropTypes.string
}
export default Social