import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/history-image-1000x1000.png')

const History = function History () {
  return (
    <div className="History">
      <Section
        data={getText().historypage}
        imageSrc={imageSrc}
        level={2}
        prefix="History"
      />
    </div>
  )
}

export default History
