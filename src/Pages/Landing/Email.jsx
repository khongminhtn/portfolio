import React, { useState } from "react"

const Copied = () => {
  return (
    <div className="copied">Copied. Exciting opportunity!</div>
  )
}

const IdledEmail = () => {
  return(
    <ul className="idled">
      <li>t</li>
      <li>u</li>
      <li>y</li>
      <li>e</li>
      <li>n</li>
      <li>m</li>
      <li>i</li>
      <li>n</li>
      <li>h</li>
      <li>k</li>
      <li>h</li>
      <li>o</li>
      <li>n</li>
      <li>g</li>
      <li>@</li>
      <li>l</li>
      <li>i</li>
      <li>v</li>
      <li>e</li>
      <li>.</li>
      <li>c</li>
      <li>o</li>
      <li>.</li>
      <li>u</li>
      <li>k</li>
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
    navigator.clipboard.writeText(e.currentTarget.getAttribute('value'))
    setTimeout(() => {
      setClicked(true)
    }, 100)

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