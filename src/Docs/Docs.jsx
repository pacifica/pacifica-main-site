import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const Docs = function Docs () {
  return (
    <div>
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().docspage, 2)
      }
    </div>
  )
}

export default Docs
