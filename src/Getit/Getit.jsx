import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/download-image-1000x1000.png')

const Getit = function Getit () {
  return (
    <div className="Getit">
      <Section
        data={getText().getitpage}
        imageSrc={imageSrc}
        level={2}
        prefix="Getit"
      />
    </div>
  )
}

export default Getit
