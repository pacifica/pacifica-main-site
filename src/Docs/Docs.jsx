import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/docs-image-1000x1000.png')

const Docs = function Docs () {
  return (
    <div className="Docs">
      <Section
        data={getText().docspage}
        imageSrc={imageSrc}
        level={2}
        prefix="Docs"
      />
    </div>
  )
}

export default Docs
