import React from "react"
import Email from './Email'

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

const Description = () => {
  return (
    <article className="description">
      <Name/>
      <SubHeading />
      <Paragraph/>
      <Email email='tuyenminhkhong@live.co.uk'/>
    </article>
  )
}

export default Description