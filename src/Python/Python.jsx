import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/PyPi-Logo.png')

const Python = function Python () {
  return (
    <div className="Python">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().pythonpage, 2, 'Python', imageSrc)
      }
    </div>
  )
}

export default Python
