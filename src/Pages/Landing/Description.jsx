import React from "react";

const Name = () => {
  return (
    <div className="tuyen-khong">Tuyen Khong</div>
  )
}

const SubHeading = () => {
  return(
    <h1 className="subheading">
      I love <b className="design">Design</b> <br/>
      and <b className="programming">Programming</b>
    </h1>
  )
}

const Paragraph = () => {
  return(
    <p className="paragraph">Web developer with Architectural design background.<br/>
    Knowledge in React, Redux, Node.js, Express.js,<br/>
    MongoDB, GraphQL and Typescript based in London.</p>
  )
}

const Email = () => {
  return(
    <ul className="email">
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

const Description = () => {
  return (
    <article className="description">
      <Name/>
      <SubHeading/>
      <Paragraph/>
      <Email/>
    </article>
  )
}

export default Description