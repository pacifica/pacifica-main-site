import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

const DropdownItem = function DropdownItem ({ name, to }) {
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
