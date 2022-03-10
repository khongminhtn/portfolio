import React from "react"
import PropType from 'prop-types'

// Components 
import Email from './Email.jsx'
import sass from './description.module.scss'

const Name = ({name}) => {
  return (
    <div className={sass.tuyenKhong}>{name}</div>
  )
}

const SubHeading = ({blue, black, sub}) => {
  return(
    <h1 className={sass.subheading}>
      {sub[0]} <b className={sass.black}>{black}</b> <br/>
      {sub[1]} <b className={sass.blue}>{blue}</b>
    </h1>
  )
}

const Paragraph = ({paragraph}) => {
  return(
    <p className={sass.paragraph}>{paragraph}</p>
  )
}

const Description = ({name, blue, black, sub, paragraph, email}) => {
  return (
    <article 
    className={sass.description}>
      <Name name={name}/>
      <SubHeading 
        blue={blue}
        black={black}
        sub={sub}/>
      <Paragraph paragraph={paragraph}/>
      <Email email={email}/>
    </article>
  )
}

Description.propTypes = {
  name: PropType.string,
  blue: PropType.string,
  black: PropType.string,
  sub: PropType.arrayOf(PropType.string),
  paragraph: PropType.string,
  email: PropType.string
}

export default Description