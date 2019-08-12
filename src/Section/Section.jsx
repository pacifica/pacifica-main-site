import React from 'react'
import SectionContent from './SectionContent.jsx'

const Section = function Section (data, level) {
  return (
    <div key={`block-${level}`}>
      <hr className="home-divider" />
      {React.createElement(`h${level}`, {
        className: 'home-title',
        key: `header-${level}`
      }, data.title)}
      {SectionContent(data.content, level)}
    </div>
  )
}
export default Section
