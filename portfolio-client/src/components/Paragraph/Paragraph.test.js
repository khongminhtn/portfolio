import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, prettyDOM} from '@testing-library/react'
import Paragraph from './Paragraph'

describe('<Paragraph/>', () => {
  console.log('======================= PARAGRAPH ==========================')
  it('Renders correct content ?', () => {
    const props = { contents: ['Hello World this is paragraph'] }
    const view = render(<Paragraph contents={props.contents}/>)
    expect(view.container).toHaveTextContent('Hello World')
  })


  it('Renders correct styles ?', () => {
    const props = { 
      contents: ['Hello World'],
      style: {
        fontSize: 10,
        fontFamily: 'Roboto Condensed',
        fontWeight: 'light',
        letterSpacing: '5px',
        color: 'red',
      }
    }

    render(<Paragraph style={props.style} contents={props.contents}/>)
    expect(screen.getByText('Hello World'))
    .toHaveStyle(`color: red; font-size: 10px; letter-spacing: 5px;`)
  })


  it('Renders default props correct ?', () => {
    render(<Paragraph/>)
    expect(screen.getByTestId(1)).toHaveTextContent('Paragraph')
    expect(screen.getByText('Paragraph'))
    .toHaveStyle(`color: black; font-size: 16px; letter-spacing: 1px;`)
  })


  it('Renders with multiple content', () => {
    const props = { 
      contents: [
        `I was born in Vietnam and moved 
        to London in 2005. I completed a Bachelor 
        of Architecture at the beginning of 2020, 
        then took on management roles for the family 
        business in beauty shortly before COVID-19.`,
        
        ` Due to my natural curiosity about 
        technology and love for computers since 
        childhood, I have decided to pursue a career 
        in tech. During the COVID-19 lock-down, I spent 
        most of my free time studying web development 
        and predominantly frontend. Utilising my design 
        and problem-solving skills from architecture, 
        I can pick up UI/UX relatively quickly.`
      ]
    }

    render(<Paragraph contents={props.contents}/>)
    // console.log(prettyDOM(screen.getByTestId(1)))
    expect(screen.getByTestId(1)).toHaveTextContent('I was born in Vietnam')
    expect(screen.getByTestId(1)).toHaveTextContent('Due to my natural curiosity')
  })
})