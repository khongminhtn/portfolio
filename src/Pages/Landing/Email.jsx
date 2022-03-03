import React, { useState } from "react"

const Copied = () => {
  return (
    <div className="copied">Copied. Exciting opportunity!</div>
  )
}

const IdledEmail = ({email}) => {
  const letters = [...email]
  return(
    <ul className="idled">
      {
        letters.map(letter => <li>{letter}</li>)
      }
    </ul>
  )
}

const HoveredEmail = () => {
  return (
    <button className="hovered">tuyenminhkhong@live.co.uk</button>
  )
}

const Email = ({ email }) => {
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
    className="email"
    value={email}
    onMouseLeave={() => setHovered(false)}
    onMouseEnter={() => setHovered(true)}
    onClick={handleClick}>
      {
        hovered && !clicked
        ? <HoveredEmail email={email}/>
        : !hovered && !clicked
        ? <IdledEmail email={email}/>
        : <Copied/>
      }
    </div>
  )
}

export default Email