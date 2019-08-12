import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

const DropdownItem = function DropdownItem ({ name, to }) {
  const isExternal = (/^https?:\/\//u).test(to)
  if (isExternal) {
    return (
      <a
        className="pacifica-dropdownItem"
        href={to}
        rel="noopener noreferrer"
        target="_blank"
      >
        {name}
      </a>
    )
  }
  return (
    <LinkContainer to={to}>
      <div className="pacifica-dropdownItem">
        {name}
      </div>
    </LinkContainer>
  )
}

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default DropdownItem
