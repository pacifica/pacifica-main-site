import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Section from './Section'

describe(
  'section test suite',
  () => {
    it(
      'renders without crashing',
      () => {
        expect.hasAssertions()
        const testData = {
          content: [
            'some content',
            {
              content: ['more subsection content'],
              title: 'subsection'
            }
          ],
          title: 'some title'
        }
        const div = document.createElement('div')
        ReactDOM.render(
          <Router>
            <Section
              data={testData}
              level={2}
            />
          </Router>
          , div
        )
        expect(div).toBeDefined()
        ReactDOM.unmountComponentAtNode(div)
      }
    )
  }
)
