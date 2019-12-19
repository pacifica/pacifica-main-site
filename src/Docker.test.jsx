import Docker from './Docker'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

describe(
  'docker Test Suite',
  () => {
    it(
      'renders without crashing',
      () => {
        expect.hasAssertions()
        const div = document.createElement('div')
        ReactDOM.render(
          <Router>
            <Docker />
          </Router>
          , div
        )
        expect(div).toBeDefined()
        ReactDOM.unmountComponentAtNode(div)
      }
    )
  }
)
