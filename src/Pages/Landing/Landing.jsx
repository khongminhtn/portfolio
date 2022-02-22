import React from 'react'
import selfImage from './assets/self2.png'

import './Landing.css' // Tells webpack Button.js uses these styles
import { Button } from '../../Components/index'
import Description from './Description'


const SelfImage = () => {
  return (
    <>
      <img src={selfImage} alt="Self" width="30%" className='Self'/>
    </>
  )
}

const IG = () => {
  return (
    <div className='IG'>IG</div>
  )
}

const Designer = () => {
  return (
    <div className='Designer'>DESIGNER</div>)
}

const Landing = () => {
  return (
    <div className='Wrapper'>
      <Designer/>
      <SelfImage/>
      <IG/>
      <Button content="Explore"/>
      <Description/>
    </div>
  )
}

export default Landing