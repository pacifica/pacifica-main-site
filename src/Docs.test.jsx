import Docs from './Docs'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

describe(
  'docs test suite',
  () => {
    it(
      'renders without crashing',
      () => {
        expect.hasAssertions()
        const div = document.createElement('div')
        ReactDOM.render(
          <Router>
            <Docs />
          </Router>
          , div
        )
        expect(div).toBeDefined()
        ReactDOM.unmountComponentAtNode(div)
      }
    )
  }
)
