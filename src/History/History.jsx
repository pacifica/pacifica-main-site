import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const History = function History () {
  return (
    <div className="History">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().historypage, 2, 'History', null)
      }
    </div>
  )
}

export default History
