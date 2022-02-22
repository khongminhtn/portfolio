import React from "react";


const Name = () => {
  return (
    <div className="TuyenKhong">Tuyen Khong</div>
  )
}

const SubHeading = () => {
  return(
    <h1 className="SubHeading">
      I love <b className="Design">Design</b> <br/>
      and <b className="Programming">Programming</b>
    </h1>
  )
}

const Paragraph = () => {
  return(
    <p className="Paragraph">Web developer with Architectural design background.<br/>
    Knowledge in React, Redux, Node.js, Express.js,<br/>
    MongoDB, GraphQL and Typescript based in London.</p>
  )
}

const Email = () => {
  return(
    <p className="Email">tuyenminhkhong@live.co.uk</p>
  )
}

const Description = () => {
  return (
    <article className="Description">
      <Name/>
      <SubHeading/>
      <Paragraph/>
      <Email/>
    </article>
  )
}

export default Description