import Header from './Header'
import React from 'react'
import ReactDOM from 'react-dom'

test('renders without crashing', () => {
  expect.hasAssertions()
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
  expect(div).toContain(expect.anything())
  ReactDOM.unmountComponentAtNode(div)
})
