import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/mission-image-1000x1000.png')

const Mission = function Mission () {
  return (
    <div className="Mission">
      <Section
        data={getText().missionpage}
        imageSrc={imageSrc}
        level={2}
        prefix="Mission"
      />
    </div>
  )
}

export default Mission
