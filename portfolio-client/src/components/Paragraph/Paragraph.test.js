import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen} from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom' 
import Paragraph from './Paragraph'

describe('<Paragraph/>', () => {
  console.log('======================= PARAGRAPH ==========================')
  it('Renders correct content ?', () => {
    const props = { content: 'Hello World this is paragraph' }
    const view = render(<Paragraph content={props.content}/>)
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

    render(<Paragraph style={props.style} content={props.content}/>)
    expect(screen.getByText('Hello World'))
    .toHaveStyle(`color: red; font-size: 10px; letter-spacing: 5px;`)
  })


  it('Renders default props correct ?', () => {
    render(<Paragraph/>)
    expect(screen.getByTestId(1)).toHaveTextContent('Paragraph')
    expect(screen.getByText('Paragraph'))
    .toHaveStyle(`color: black; font-size: 16px; letter-spacing: 1px;`)
  })
})