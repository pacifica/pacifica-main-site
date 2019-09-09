import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const Contact = function Contact () {
  return (
    <div className="Contact">
      <Section
        data={getText().contactpage}
        level={2}
        prefix="Contact"
      />
    </div>
  )
}

export default Contact
