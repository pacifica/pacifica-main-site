import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/Docker-Logo.png')

const Docker = function Docker () {
  return (
    <div className="Docker">
      <Section
        data={getText().dockerpage}
        imageSrc={imageSrc}
        level={2}
        prefix="Docker"
      />
    </div>
  )
}

export default Docker
