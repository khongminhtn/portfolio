import React from 'react'

// CSS: Tells webpack Button.js uses these styles
import './ui/style.modules.scss'
import './ui/animation.modules.scss'
import selfImage from './assets/self2.png'

// Component
import { Button } from '../../Components/index'
import Description from './Description'

// Context & Actions
import { useStateValue } from '../../state/context'
import { changeDisplay } from '../../state/reducer'

const SelfImage = () => {
  return (
    <>
      <img src={selfImage} alt="Self" width="30%" className='self'/>
    </>
  )
}

const IG = () => {
  return (
    <div className="IG">IG</div>
  )
}

const Designer = () => {
  return (
    <div className="designer">DESIGNER</div>)
}

const ButtonContainer = () => {
  const {state, dispatch} = useStateValue()

  const handleClick = () => {
    dispatch(changeDisplay('projects'))
  }

  return (
    <div 
    className="button-container">
      <Button 
        content="Explore"
        handleClick={handleClick}/>
    </div>
  )
}

const Landing = () => {
  return (
    <div className="landing">
      <Designer/>
      <SelfImage/>
      <IG/>
      <ButtonContainer/>
      <Description/>
    </div>
  )
}

export default Landing