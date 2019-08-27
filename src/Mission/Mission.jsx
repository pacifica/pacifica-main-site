import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/mission-image-1000x1000.png')

const Mission = function Mission () {
  return (
    <div className="Mission">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().missionpage, 2, 'Mission', imageSrc)
      }
    </div>
  )
}

export default Mission
