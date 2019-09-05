import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const Contact = function Contact () {
  return (
    <div className="Contact">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().contactpage, 2, 'Contact', null)
      }
    </div>
  )
}

export default Contact
