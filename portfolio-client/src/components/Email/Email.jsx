import React, { useState } from "react"
import PropTypes from 'prop-types'
import sass from './sass/index.module.scss'

const Copied = () => {
  return (
    <div className={sass.copied}>Copied. Exciting opportunity!</div>
  )
}

const IdledEmail = ({email}) => {
  const letters = [...email]
  return(
    <ul className={sass.idled}>
      {
        letters.map((letter, i) => <li key={i}>{letter}</li>)
      }
    </ul>
  )
}

const HoveredEmail = ({email}) => {
  return (
    <button className={sass.hovered}>{email}</button>
  )
}

const Email = ({ content, style}) => {
  const [hovered, setHovered] = useState(false) 
  const [clicked, setClicked] = useState(false)

  const handleClick = (e) => {
    setClicked(true)
    navigator.clipboard.writeText(e.currentTarget.getAttribute('value'))

    setTimeout(() => {
      setClicked(false)
    }, 5000)
  }

  return (
    <div 
    className={sass.email}
    style={style}
    value={content}
    onMouseLeave={() => setHovered(false)}
    onMouseEnter={() => setHovered(true)}
    onClick={handleClick}>
      {
        hovered && !clicked
        ? <HoveredEmail email={content}/>
        : !hovered && !clicked
        ? <IdledEmail email={content}/>
        : <Copied/>
      }
    </div>
  )
}

Email.propTypes = {
  content: PropTypes.string,
  style: PropTypes.object
}

export default Email