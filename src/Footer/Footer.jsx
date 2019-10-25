import './index.scss'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import StyledParagraph from './StyledParagraph.jsx'
import getText from '../Utils'

const Footer = function Footer () {
  const { footer } = getText()
  return (
    <div className="root-footer">
      <div className="footer-root">
        <ReactMarkdown
          renderers={{
            paragraph: StyledParagraph
          }}
          source={footer}
        />
      </div>
    </div>
  )
}

export default Footer
