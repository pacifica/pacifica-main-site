import PropTypes from 'prop-types'
import React from 'react'
import SectionContent from './SectionContent.jsx'

// eslint-disable-next-line max-params
const Section = function Section ({ data, level, prefix, imageSrc, uniqueKey }) {
  let imageComponent = null
  if (imageSrc !== null) {
    imageComponent = (
      <img
        alt=""
        className={`${prefix}-image`}
        src={imageSrc}
      />
    )
  }
  return (
    <div
      className={`block-${level}`}
      key={`block-${level}-${Math.random()}`}
    >
      {
        // eslint-disable-next-line no-magic-numbers
        level > 2 && <hr className={`${prefix}-divider`} />
      }
      {imageComponent}
      {React.createElement(
        `h${level}`,
        {
          className: `${prefix}-title`,
          key: `header-${level}`
        },
        data.title
      )}
      <SectionContent
        content={data.content}
        level={level}
        prefix={prefix}
        uniqueKey={uniqueKey}
      />
    </div>
  )
}

Section.propTypes = {
  data: PropTypes.exact({
    content: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageSrc: PropTypes.object,
  level: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  uniqueKey: PropTypes.string
}

Section.defaultProps = {
  imageSrc: null,
  prefix: 'home',
  uniqueKey: 'home'
}

export default Section
