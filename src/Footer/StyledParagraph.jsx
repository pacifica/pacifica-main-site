import PropTypes from 'prop-types'
import React from 'react'

const StyledParagraph = function StyledParagraph (props) {
  const { children } = props
  return (
    <p className="footer-text">
      {children}
    </p>
  )
}

StyledParagraph.propTypes = {
  children: PropTypes.node.isRequired
}

export default StyledParagraph
