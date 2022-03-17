import React from 'react'
import PropTypes from 'prop-types'
import { useStateValue } from '../../state/context'

// States
import sass from './social.module.scss'
import { socialStyle, copiedStyle } from './style'


// Assets
import emailBlack from './assets/email-black.png'
import emailWhite from './assets/email-white.png'
import githubBlack from './assets/github.png'
import githubWhite from './assets/github-white.png'
import linkedinBlack from './assets/linkedin.png'
import linkedinWhite from './assets/linkedin-white.png'
import codepenBlack from './assets/codepen-black.png'
import codepenWhite from './assets/codepen-white.png'

const Copied = ({copied, color}) => {
  return(
    <div 
    className={sass.copied}
    style={copiedStyle(copied, color)}>Copied</div>
  )
}



const EmailIcon = ({img, handleClick}) => {
  return (
    <img 
    className={sass.email} 
    alt='email'
    src={img}
    onClick={handleClick}/> 
  )
}



const Icons = ({email, github, linkedin, codepen, currentPage}) => {
  return (
    <section 
    className={sass.social}
    style={socialStyle(currentPage)}>

      <EmailIcon { ...email }/>

      <a
      href='https://github.com/khongminhtn'
      target='_blank'
      rel='noreferrer'>
        <img 
        className={ sass.github } 
        alt='github'
        src={ github }/>
      </a>

      <a
      href='https://www.linkedin.com/in/tuyenkhongarch/'
      target='_blank'
      rel='noreferrer'>
        <img 
        className={ sass.linkedin } 
        src={ linkedin } 
        alt='linkedin'/>
      </a>

      <a
      href='https://codepen.io/khongminhtn'
      target='_blank'
      rel='noreferrer'>
        <img 
        className={sass.codepen} 
        src={ codepen } 
        alt='codepen'/>
      </a>
    </section>
  )
}


const Social = () => {
  // State
  const { state } = useStateValue()
  const { currentPage } = state.scroll
  const { pages } = state
  const [copied, setCopied] = React.useState(false)

  const about = pages.about

  // Props
  const emailProps = {
    copied,
    img: currentPage >= about ? emailWhite : emailBlack,
    handleClick: () => {
      navigator.clipboard.writeText('tuyenminhkhong@live.co.uk')
      setCopied(!copied)
      setTimeout(() => setCopied(false), 1000)
    }
  }

  const iconProps = {
    email: emailProps,
    github: currentPage >= about ? githubWhite : githubBlack,
    linkedin: currentPage >= about ? linkedinWhite: linkedinBlack,
    codepen: currentPage >= about ? codepenWhite : codepenBlack,
    currentPage
  }

  const copiedProps = {
    copied: copied,
    color: currentPage === pages.about ? 'white' : 'black'
  }

  // JSX
  return(
    <>
      <Copied { ...copiedProps }/>
      <Icons { ...iconProps }/>
    </>
  )
}

Social.propTypes = {
  // color: PropTypes.string
}
export default Social