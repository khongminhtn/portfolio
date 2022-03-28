import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, prettyDOM } from '@testing-library/react'
import ArrowChev from './ArrowChev'

describe('<ArrowChev/>', () => {
  console.log('======================= ArrowChev ==========================')
  it('Renders with correct default props  ?', () => {
    render(<ArrowChev/>)
    expect(screen.getByTestId(1)
    ).toHaveStyle('width: 20vw; animation-duration: 500ms')
  })


  it('Renders with correct input props  ?', () => {
    const props = {
      size: '100vw',
      duration: 1000
    }
    render(<ArrowChev {...props}/>)
    expect(screen.getByTestId(1)
    ).toHaveStyle('width: 100vw; animation-duration: 1000ms')
  })
})