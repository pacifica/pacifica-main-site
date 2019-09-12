import './index.scss'
import React from 'react'
import Section from '../Section'
import getText from '../Utils'

const imageSrc = require('../assets/about-image-1000x1000.png')

const About = function About () {
  return (
    <div className="About">
      <Section
        data={getText().aboutpage}
        imageSrc={imageSrc}
        level={2}
        prefix="About"
      />
    </div>
  )
}

export default About
