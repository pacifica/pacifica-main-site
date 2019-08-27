import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/download-image-1000x1000.png')

const Getit = function Getit () {
  return (
    <div className="Getit">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().getitpage, 2, 'Getit', imageSrc)
      }
    </div>
  )
}

export default Getit
