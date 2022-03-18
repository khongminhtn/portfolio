import React from 'react'

// Component
import { Button, Description, Email } from '../../components/index'

// Context & Actions
import { useStateValue } from '../../state/context'
import { setScrollTranslate, setCurrentPage } from '../../state/reducer'

// Styles & Assets
import sass from './sass/index.module.scss';
import { animation } from './style.js'
import selfImage from './assets/selfCompressed.png'





const SelfImage = () => {
  const { state } = useStateValue()
  const { currentPage, duration } = state.scroll

  return (
    <>
      <img 
        className={sass.self}
        style={animation('SelfImage', currentPage, duration)}
        src={selfImage} 
        alt="Self"
        />
    </>
  )
}


const IG = () => {
  const { state } = useStateValue()
  const { currentPage, duration } = state.scroll

  return (
    <h1 
    className={sass.IG}
    style={animation('IG', currentPage, duration)}>
      IG
    </h1>
  )
}


const Designer = () => {
  const { state } = useStateValue()
  const { currentPage, duration } = state.scroll
  
  return (
    <h1 
    className={sass.designer}
    style={animation('Designer', currentPage, duration)}>
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
  return (
    <section className={sass.landing}>
      <Designer/>
      <SelfImage/>
      <IG/>
      <ButtonContainer/>
      <DescriptionContainter/>
    </section>
  )
}


export default Landing