import Link from '../Link.jsx'
import PropTypes from 'prop-types'
import React from 'react'

const DropdownItem = function DropdownItem ({ name, to }) {
  return (
    <Link className="pacifica-dropdownItem" to={to}>
      <div>
        {name}
      </div>
    </Link>
  )
}

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default DropdownItem
