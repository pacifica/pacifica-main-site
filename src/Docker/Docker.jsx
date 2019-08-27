import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/Docker-Logo.png')

const Docker = function Docker () {
  return (
    <div className="Docker">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().dockerpage, 2, 'Docker', imageSrc)
      }
    </div>
  )
}

export default Docker
