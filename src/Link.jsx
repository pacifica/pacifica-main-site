import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

const Link = function Link ({ to, children, ...props }) {
  const isExternal = (/^https?:\/\//u).test(to)
  if (isExternal) {
    return (
      <a
        {...props}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  }
  return (
    <LinkContainer to={to} style={{cursor: 'pointer'}} {...props}>
      {children}
    </LinkContainer>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Link
