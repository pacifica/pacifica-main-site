import './index.scss'
import ContactForm from './ContactForm.jsx'
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
      <hr className="contactformheader-divider" />
      <h3 class="Contact-title">Contact Form</h3>
      <ContactForm />
    </div>
  )
}

export default Contact
