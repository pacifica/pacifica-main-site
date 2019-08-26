import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const Getit = function Getit () {
  return (
    <div className="Getit">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().getitpage, 2, 'Getit', null)
      }
    </div>
  )
}

export default Getit
