import React from 'react'
import { Header, Paragraph, CallToAction } from '../../../../components'
import useSetMedia from '../../../../hooks/useSetMedia'
import useTimeString from '../../../../hooks/useTimeString'

import sass from './Description.module.scss'
import styles from './Description.style.js'


const Description = () => {
  const [copied, setCopied] = React.useState(false)
  const media = useSetMedia()
  const time = useTimeString()

  // PROPS
  const headerProps = {
    content: 'Tuyen Khong',
    style: styles.header(media)
  }

  const paragraphProps = {
    contents: [
      `I was born in Vietnam and moved 
      to London in 2005. I completed a Bachelor 
      of Architecture at the beginning of 2020, 
      then took on management roles for the family 
      business in beauty shortly before COVID-19.`,

      ` Due to my natural curiosity about 
      technology and love for computers since 
      childhood, I have decided to pursue a career 
      in tech. During the COVID-19 lock-down, I spent 
      most of my free time studying web development 
      and predominantly frontend. Utilising my design 
      and problem-solving skills from architecture, 
      I can pick up UI/UX relatively quickly.`
    ],
    style: styles.paragraph(media)
  }

  const callToActionProps = {
    handleClick: (e) => {
      setCopied(true)
      navigator.clipboard.writeText('tuyenminhkhong@live.co.uk')
      
      setTimeout(() => {
        setCopied(false)
      }, 5000)
    },
    href: null,
    header: 'Get In Touch',
    subHeading: `London (${time})`,
    
    // styling
    arrow: {
      size: 24,
      color: 'white',
      stroke: 2
    },
    lineColor: 'white',
    style: styles.cta(media),
    headerStyle: styles.ctaHeader(media),
    subHeadingStyle: styles.ctaSubHeader(media)
  }

  const copiedProps = { 
    content: 'Email copied !',
    style: styles.copied(media)
  }
  
  // CONDITIONAL COMPONENTS
  const cCallToAction = copied ? <Header {...copiedProps}/> : <CallToAction {...callToActionProps}/>

  return (
    <section
    className={sass.Description}>
      <Header {...headerProps}/>
      <Paragraph {...paragraphProps}/>
      {cCallToAction}
    </section>
  )
}

export default Description