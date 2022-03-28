import React from 'react'

// Layout
import { 
  Arrow, 
  Portfolio,
  SelfImage, 
  Description, 
  ButtonContainer, 
  Designer } from './Layout/index'

// Styles & Assets
import sass from './Landing.module.scss';


const Landing = () => {

  return (
    <section className={sass.Landing}>
      <SelfImage/>
      <Designer/>
      <ButtonContainer/>
      <Description/>
      <Arrow/>
      <Portfolio/>
    </section>
  )
}


export default Landing