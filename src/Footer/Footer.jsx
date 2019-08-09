import React from 'react'
import getText from '../Utils'

const Footer = function Footer () {
  const { footer } = getText()
  return (
    <div className="root-footer">
      <div className="footer-root">
        <p className="footer-text">
          {footer}
        </p>
      </div>
    </div>
  )
}

export default Footer
