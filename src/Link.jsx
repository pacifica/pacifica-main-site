/* eslint-disable react/forbid-component-props */
import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

const Link = function Link ({ to, children, className }) {
  const isExternal = (/^https?:\/\//u).test(to)
  if (isExternal) {
    return (
      <a
        className={className}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  }
  return (
    <LinkContainer
      className={`link ${className}`}
      to={to}
    >
      {children}
    </LinkContainer>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired
}

Link.defaultProps = {
  children: null,
  className: null
}

export default Link
