import React from 'react'
import SectionContent from './SectionContent.jsx'

// eslint-disable-next-line max-params
const Section = function Section (data, level, prefix = 'home', imageSrc) {
  let imageComponent = ''
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
      {React.createElement(`h${level}`, {
        className: `${prefix}-title`,
        key: `header-${level}`
      }, data.title)}
      {imageComponent}
      {SectionContent(data.content, level, prefix)}
    </div>
  )
}
export default Section
