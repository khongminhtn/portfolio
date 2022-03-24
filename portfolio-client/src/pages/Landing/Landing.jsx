import React from 'react'

// Context & Actions
import { setScrollTranslate, setCurrentPage } from '../../state/reducer'
import { useStateValue } from '../../state/context'

// Hooks
import useMediaQuery from '../../hooks/useMediaQuery'

// Component
import { ArrowChev, BGText, Button, Description, Email, SelfImage } from '../../components/index'

// Styles & Assets
import sass from './sass/index.module.scss';
import style from './Landing.desktopStyle.js'
import styleMobile from './Landing.mobileStyle.js'



const IG = ({style}) => {
  return (
    <h1 
    className={sass.IG}
    style={style}>
      IG
    </h1>
  )
}


const Designer = ({style}) => {
  return (
    <h1 
    className={sass.designer}
    style={style}>
      DES<span>IG</span>NER
    </h1>)
}


const ButtonContainer = () => {
  const {dispatch} = useStateValue()

  const handleClick = () => {
    // Scroll to page 1 from page 0
    dispatch(setScrollTranslate(100))
    dispatch(setCurrentPage(1))
  }
  return (
    <div 
    className={sass['button-container']}>
      <Button 
        handleClick={handleClick}
        content="Explore"/>
    </div>
  )
}


const DescriptionContainter = () => {
  return (
    <article className={sass['description-container']}>
      <Description
        name='Tuyen Khong'
        black='Designer'
        blue='Developer'
        sub={['Website', 'and']}
        paragraph='Web developer with Architectural background.
        Knowledge in React, Redux, Node.js, Express.js,
        MongoDB, GraphQL and Typescript based in London.'/>
      <Email email='tuyenminhkhong@live.co.uk'/>
    </article>
  )
}


const Landing = () => {
  // DESKTOP
  const { state } = useStateValue()
  const { defaultScroll } = state
  const { currentPage } = state.scroll

  // MOBILE
  const largePhone477 = useMediaQuery('(max-width: 477px)')
  const isPortrait = useMediaQuery('(orientation: portrait)')
  const largePhone927 = useMediaQuery('(max-width: 927px)')
  const isLandscape = useMediaQuery('(orientation: landscape)')

  const selfImageProps = {
    transitions: (largePhone477 && isPortrait) || (largePhone927 && isLandscape)
      ? styleMobile.selfImage(defaultScroll.top, isLandscape)
      : style.selfImage(currentPage),
  }

  const arrowChevProps = {
    transitions: styleMobile.arrowChev(currentPage)
  }

  const arrowChev = (largePhone477 && isPortrait) || (largePhone927 && isLandscape)
  ? <ArrowChev {...arrowChevProps}/>
  : <></>

  return (
    <section className={sass.landing}>
      {arrowChev}
      <Designer style={style.designer(currentPage)}/>
      <SelfImage {...selfImageProps}/>
      <IG style={style.IG(currentPage)}/>
      <ButtonContainer/>
      <DescriptionContainter/>
      <BGText text='PORTFOLIO'/>
    </section>
  )
}


export default Landing