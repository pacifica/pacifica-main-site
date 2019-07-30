import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

test('renders without crashing', () => {
  expect.hasAssertions()
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  expect(div).toContain(expect.anything())
  ReactDOM.unmountComponentAtNode(div)
})
