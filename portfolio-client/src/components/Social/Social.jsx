import React from 'react'
import PropTypes from 'prop-types'
import { useStateValue } from '../../state/context'

// States
import sass from './social.module.scss'
import { copiedStyle } from './style'


const Copied = ({copied, color}) => {
  return(
    <div 
    className={sass.copied}
    style={copiedStyle(copied, color)}>Copied</div>
  )
}

const EmailIcon = ({content, background, handleClick}) => {
  return (
    <svg 
    className={sass.email}
    onClick={handleClick} 
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg">
        <path style={background} d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z" />
        <path style={content} d="M18,26.1623226 L18,46.5476129 C18,47.6566452 18.8117419,48.5554839 19.9300645,48.5554839 L51.7447742,48.5554839 C52.8619355,48.5554839 53.6748387,47.6461935 53.6748387,46.5476129 L53.6748387,26.1623226 C53.6748387,24.9452903 52.947871,24 51.7447742,24 L19.9300645,24 C18.6805161,24 18,24.9685161 18,26.1623226 M20.9334194,27.9379355 C20.9334194,27.4467097 21.2307097,27.1656774 21.7056774,27.1656774 C21.9994839,27.1656774 33.560129,34.4910968 34.2603871,34.9207742 L36.0696774,36.0460645 C36.6433548,35.6616774 37.2193548,35.3330323 37.8139355,34.9347097 C39.0274839,34.1589677 49.8251613,27.1656774 50.1224516,27.1656774 C50.5985806,27.1656774 50.8947097,27.4467097 50.8947097,27.9379355 C50.8947097,28.4581935 49.8925161,28.9749677 49.239871,29.3732903 C45.1393548,31.8723871 41.04,34.5967742 36.980129,37.1887742 C36.7432258,37.3490323 36.2845161,37.6916129 35.9407742,37.6393548 C35.5575484,37.580129 23.7936774,30.0224516 21.6534194,28.7636129 C21.3317419,28.5743226 20.9334194,28.4012903 20.9334194,27.9379355" />
    </svg>
  )
}

const GitHub = ({background}) => {
  return (
    <svg 
    className={sass.github}  
    viewBox="0 0 32 32" >
      <path style={background} fillRule="evenodd" clipRule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" />
    </svg>
  )
}

const Codepen = ({background, content}) => {
  return (
    <svg 
    className={sass.codepen} viewBox="0 0 72 72" >
      <g fill="none" fillRule="evenodd">
        <path style={background} d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z" />
        <path style={content} d="M59.982,28.419 C59.9775,28.3875 59.97,28.359 59.9655,28.329 C59.955,28.2705 59.9445,28.212 59.9295,28.1565 C59.9205,28.122 59.907,28.089 59.8965,28.056 C59.88,28.005 59.8635,27.9555 59.844,27.906 C59.8305,27.8715 59.814,27.837 59.7975,27.8055 C59.7765,27.7575 59.754,27.7125 59.727,27.669 C59.709,27.636 59.688,27.6045 59.6685,27.573 C59.6415,27.5295 59.613,27.4875 59.5815,27.447 C59.559,27.417 59.535,27.387 59.511,27.3585 C59.478,27.3195 59.4435,27.282 59.4075,27.246 C59.3805,27.219 59.355,27.1905 59.3265,27.1665 C59.2875,27.132 59.2485,27.099 59.2095,27.0675 C59.178,27.0435 59.148,27.0195 59.1165,26.997 C59.1045,26.9895 59.094,26.979 59.082,26.9715 L37.1445,12.3465 C36.4515,11.8845 35.55,11.8845 34.8555,12.3465 L12.9195,26.9715 C12.9075,26.979 12.897,26.9895 12.885,26.997 C12.852,27.0195 12.822,27.0435 12.792,27.0675 C12.7515,27.099 12.7125,27.132 12.675,27.1665 C12.6465,27.1905 12.6195,27.219 12.5925,27.246 C12.5565,27.282 12.522,27.3195 12.4905,27.3585 C12.465,27.387 12.441,27.417 12.4185,27.447 C12.3885,27.4875 12.36,27.5295 12.333,27.573 C12.312,27.6045 12.2925,27.636 12.273,27.669 C12.2475,27.7125 12.225,27.7575 12.2025,27.8055 C12.1875,27.837 12.171,27.8715 12.1575,27.906 C12.1365,27.9555 12.12,28.005 12.1035,28.056 C12.093,28.089 12.081,28.122 12.072,28.1565 C12.057,28.212 12.0465,28.2705 12.036,28.329 C12.03,28.359 12.0225,28.3875 12.0195,28.419 C12.0075,28.506 12,28.596 12,28.6875 L12,43.3125 C12,43.4025 12.0075,43.4925 12.0195,43.5825 C12.0225,43.611 12.03,43.641 12.036,43.671 C12.0465,43.7295 12.057,43.7865 12.072,43.8435 C12.081,43.878 12.093,43.911 12.1035,43.944 C12.12,43.9935 12.1365,44.0445 12.1575,44.0955 C12.171,44.1285 12.1875,44.1615 12.2025,44.1945 C12.225,44.241 12.2475,44.286 12.273,44.3325 C12.2925,44.364 12.312,44.3955 12.333,44.427 C12.36,44.4705 12.3885,44.511 12.4185,44.5515 C12.441,44.583 12.465,44.613 12.4905,44.6415 C12.522,44.679 12.5565,44.718 12.5925,44.7525 C12.6195,44.781 12.6465,44.808 12.675,44.8335 C12.7125,44.868 12.7515,44.901 12.792,44.9325 C12.822,44.9565 12.852,44.9805 12.885,45.003 C12.897,45.0105 12.9075,45.021 12.9195,45.0285 L34.8555,59.6535 C35.202,59.8845 35.601,60 36,60 C36.399,60 36.798,59.8845 37.1445,59.6535 L59.082,45.0285 C59.094,45.021 59.1045,45.0105 59.1165,45.003 C59.148,44.9805 59.178,44.9565 59.2095,44.9325 C59.2485,44.901 59.2875,44.868 59.3265,44.8335 C59.355,44.808 59.3805,44.781 59.4075,44.7525 C59.4435,44.718 59.478,44.679 59.511,44.6415 C59.535,44.613 59.559,44.583 59.5815,44.5515 C59.613,44.511 59.6415,44.4705 59.6685,44.427 C59.688,44.3955 59.709,44.364 59.727,44.3325 C59.754,44.286 59.7765,44.241 59.7975,44.1945 C59.814,44.1615 59.8305,44.1285 59.844,44.0955 C59.8635,44.0445 59.88,43.9935 59.8965,43.944 C59.907,43.911 59.9205,43.878 59.9295,43.8435 C59.9445,43.7865 59.955,43.7295 59.9655,43.671 C59.97,43.641 59.9775,43.611 59.982,43.5825 C59.994,43.4925 60,43.4025 60,43.3125 L60,28.6875 C60,28.596 59.994,28.506 59.982,28.419 L59.982,28.419 L59.982,28.419 Z M38.0625,17.9175 L54.2235,28.6905 L47.0055,33.519 L38.0625,27.537 L38.0625,17.9175 L38.0625,17.9175 Z M33.9375,17.9175 L33.9375,27.537 L24.996,33.519 L17.7765,28.6905 L33.9375,17.9175 L33.9375,17.9175 Z M16.125,32.5485 L21.2865,36 L16.125,39.4515 L16.125,32.5485 L16.125,32.5485 Z M33.9375,54.0825 L17.7765,43.3095 L24.996,38.4825 L33.9375,44.463 L33.9375,54.0825 L33.9375,54.0825 Z M36,40.8795 L28.7055,36 L36,31.1205 L43.296,36 L36,40.8795 L36,40.8795 Z M38.0625,54.0825 L38.0625,44.463 L47.0055,38.4825 L54.2235,43.3095 L38.0625,54.0825 L38.0625,54.0825 Z M55.875,39.4515 L50.715,36 L55.875,32.5485 L55.875,39.4515 L55.875,39.4515 Z"/>
      </g>
    </svg>
  )
}

const LinkedIn = ({background, content}) => {
  return(
    <svg 
    className={sass.linkedin} 
    enableBackground="new 0 0 32 32" 
    version="1.1" 
    viewBox="0 0 32 32" 
    xmlns="http://www.w3.org/2000/svg">
      <path style={background} d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" />
      <path style={content} d="M24.294,22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818c-1.889,0-2.735,1.039-3.206,1.768v-1.517h-3.558   c0.047,1.005,0,10.704,0,10.704h3.558v-5.978c0-0.319,0.023-0.639,0.117-0.867c0.257-0.639,0.842-1.301,1.825-1.301   c1.288,0,1.803,0.981,1.803,2.42v5.727L24.294,22.942L24.294,22.942z M9.685,10.777c1.24,0,2.013-0.823,2.013-1.85   c-0.023-1.05-0.773-1.849-1.99-1.849S7.696,7.877,7.696,8.927c0,1.028,0.772,1.85,1.967,1.85H9.685z M11.464,22.942V12.238H7.907   v10.704H11.464z"/>
    </svg>
  )
}


const Icons = ({email, linkedin, github, codepen}) => {
  return (
    <section 
    className={sass.social}>

      <EmailIcon { ...email }/>
      
      <a
      href='https://github.com/khongminhtn'
      target='_blank'
      rel='noreferrer'>
        <GitHub {...github}/>
      </a>
      
      <a
      href='https://www.linkedin.com/in/tuyenkhongarch/'
      target='_blank'
      rel='noreferrer'>
        <LinkedIn {...linkedin}/>
      </a>

      <a
      href='https://codepen.io/khongminhtn'
      target='_blank'
      rel='noreferrer'>
        <Codepen {...codepen}/>
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

  // Props
  const aboutPage = currentPage === pages.about
  const content = { 
    fill: aboutPage ? 'black' : 'white', 
    opacity: currentPage === 0 ? '0': '1',
    transition: '500ms ease-out' 
  }
  const background = { 
    fill: aboutPage ? 'white' : 'black',
    opacity: currentPage === 0 ? '0': '1',
    transition: '500ms ease-out' 
  }

  const iconProps = {
    email: {
      content,
      background,
      handleClick: () => {
        navigator.clipboard.writeText('tuyenminhkhong@live.co.uk')
        setCopied(!copied)
        setTimeout(() => setCopied(false), 1000)
      }
    },
    github: {
      content,
      background,
    },
    linkedin: {
      content,
      background,
    },
    codepen: {
      content,
      background,
    },
    aboutPage: {
      content,
      background,
    },
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