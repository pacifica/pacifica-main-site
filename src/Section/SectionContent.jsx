import React from 'react'
import ReactMarkdown from 'react-markdown'
import Section from './Section.jsx'

const SectionContent = function SectionContent (content, level, prefix = 'home') {
  const items = content.map((value, index) => {
    if (typeof value === 'string') {
      return (
        <div
          className={`${prefix}-text-block`}
          key={`div-block-${level}-${index.toString()}`}
        >
          <p
            className={`${prefix}-text`}
            key={`paragraph-${level}-${index.toString()}`}
          >
            <ReactMarkdown source={value} />
          </p>
        </div>
      )
    }
    // eslint-disable-next-line no-magic-numbers
    return (Section(value, level + 1, prefix, null))
  })
  return items
}

export default SectionContent
