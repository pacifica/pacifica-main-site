import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/history-image-1000x1000.png')

const History = function History () {
  return (
    <div className="History">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().historypage, 2, 'History', imageSrc)
      }
    </div>
  )
}

export default History
