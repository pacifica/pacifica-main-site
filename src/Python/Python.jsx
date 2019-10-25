import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/PyPi-Logo.png')

const Python = function Python () {
  return (
    <div className="Python">
      <Section
        data={getText().pythonpage}
        imageSrc={imageSrc}
        level={2}
        prefix="Python"
      />
    </div>
  )
}

export default Python
