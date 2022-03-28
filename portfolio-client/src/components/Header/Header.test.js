import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, prettyDOM } from '@testing-library/react'
import Header from './Header'

describe('<Header/>', () => {
  console.log('======================= HEADER ==========================')
  it('Renders correct content ?', () => {
    const props = { content: 'Hello World' }
    const view = render(<Header content={props.content}/>)
    expect(view.container).toHaveTextContent('Hello World')
  })

  it('Renders correct styles ?', () => {
    const props = { 
      content: 'Hello World',
      style: {
        fontSize: 10,
        fontFamily: 'Roboto Condensed',
        fontWeight: 'light',
        letterSpacing: '5px',
        color: 'red',
      }
    }
    render(<Header style={props.style} content={props.content}/>)
    expect(screen.getByText('Hello World'))
    .toHaveStyle(`color: red; font-size: 10px; letter-spacing: 5px;`)
  })
})