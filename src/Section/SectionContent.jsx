import React from 'react'
import Section from './Section.jsx'

const SectionContent = function SectionContent (content, level) {
  const items = content.map((value, index) => {
    if (typeof value === 'string') {
      return (
        <div
          className="home-text-block"
          key={`div-block-${level}-${index.toString()}`}
        >
          <p
            className="home-text"
            key={`paragraph-${level}-${index.toString()}`}
          >
            {value}
          </p>
        </div>
      )
    }
    // eslint-disable-next-line no-magic-numbers
    return (Section(value, level + 1))
  })
  return items
}

export default SectionContent
