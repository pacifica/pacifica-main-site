import React from 'react'
import SectionContent from './SectionContent.jsx'

const Section = function Section (data, level, prefix = 'home', imageSrc) {
  return (
    <div key={`block-${level}`}>
      <hr className={`${prefix}-divider`} />
      {React.createElement(`h${level}`, {
        className: `${prefix}-title`,
        key: `header-${level}`
      }, data.title)}
      {imageSrc && <img className={`${prefix}-image`} alt='' src={imageSrc} />}
      {SectionContent(data.content, level, prefix)}
    </div>
  )
}
export default Section
