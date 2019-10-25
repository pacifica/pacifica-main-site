import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Section from './Section.jsx'

const SectionContent = function SectionContent ({ content, level, prefix, uniqueKey }) {
  const items = content.map((value, index) => {
    if (typeof value === 'string') {
      return (
        <div
          className={`${prefix}-text-block`}
          key={`div-block-${level}-${index.toString()}`}
        >
          <div
            className={`${prefix}-text`}
            key={`paragraph-${level}-${index.toString()}`}
          >
            <ReactMarkdown source={value} />
          </div>
        </div>
      )
    }
    // eslint-disable-next-line no-magic-numbers
    const nextLevel = level + 1
    const nextUniqueKey = `${uniqueKey}-${prefix}-${nextLevel}-${index}`
    return (
      <Section
        data={value}
        key={nextUniqueKey}
        level={nextLevel}
        prefix={prefix}
        uniqueKey={nextUniqueKey}
      />
    )
  })
  return items
}

SectionContent.propTypes = {
  // We need to make a proptype for the section in yaml
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.array.isRequired,
  level: PropTypes.number,
  prefix: PropTypes.string,
  uniqueKey: PropTypes.string
}

export default SectionContent
