import React, { useState } from "react"

const Copied = () => {
  return (
    <div className="copied">Copied, exciting opportunity !</div>
  )
}

const IdledEmail = () => {
  return(
    <ul className="idled">
      <li className="t">t</li>
      <li className="u">u</li>
      <li className="y">y</li>
      <li className="e">e</li>
      <li className="n">n</li>
      <li className="m">m</li>
      <li className="i">i</li>
      <li className="n2">n</li>
      <li className="h">h</li>
      <li className="k">k</li>
      <li className="h2">h</li>
      <li className="o">o</li>
      <li className="n3">n</li>
      <li className="g">g</li>
      <li className="at">@</li>
      <li className="l">l</li>
      <li className="i2">i</li>
      <li className="v">v</li>
      <li className="e2">e</li>
      <li>.</li>
      <li className="c">c</li>
      <li className="o2">o</li>
      <li>.</li>
      <li className="u2">u</li>
      <li className="k2">k</li>
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
    class="email"
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