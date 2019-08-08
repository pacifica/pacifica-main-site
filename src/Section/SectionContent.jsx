import React from 'react'
import Section from './Section.jsx'

const SectionContent = function SectionContent (content, level) {
  const items = content.map((value, index) => {
    if (typeof value === 'string') {
      return (
        <p key={`paragraph-${level}-${index.toString()}`}>
          {value}
        </p>
      )
    }
    // eslint-disable-next-line no-magic-numbers
    return (Section(value, level + 1))
  })
  return items
}

export default SectionContent
