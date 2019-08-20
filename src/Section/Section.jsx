import React from 'react'
import SectionContent from './SectionContent.jsx'

// eslint-disable-next-line max-params
const Section = function Section (data, level, prefix = 'home', imageSrc = null) {
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
    <div key={`block-${level}`}>
      <hr className={`${prefix}-divider`} />
      {imageComponent}
      {React.createElement(`h${level}`, {
        className: `${prefix}-title`,
        key: `header-${level}`
      }, data.title)}
      {SectionContent(data.content, level, prefix)}
    </div>
  )
}
export default Section
