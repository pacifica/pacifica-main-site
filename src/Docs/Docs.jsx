import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/docs-image-1000x1000.png')

const Docs = function Docs () {
  return (
    <div className="Docs">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().docspage, 2, 'Docs', imageSrc)
      }
    </div>
  )
}

export default Docs
