import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/about-image-1000x1000.png')

const About = function About () {
  return (
    <div className="About">
      {
        // We are starting with h2 that's why 2
        // eslint-disable-next-line no-magic-numbers
        Section(getText().aboutpage, 2, 'About', imageSrc)
      }
    </div>
  )
}

export default About
