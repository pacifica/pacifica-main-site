import { Navbar } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

const Dropdown = function Dropdown ({ items }) {
  return (
    // eslint-disable-next-line react/forbid-component-props
    <Navbar.Brand className="pacifica-navbarBrand">
      <div className="pacifica-dropdown">
        {items.shift()}
        <div className="pacifica-dropdownMenu">
          {items}
        </div>
        <div className="pacifica-dropdownArrow" />
        <div className="pacifica-dropdownOverline" />
      </div>
    </Navbar.Brand>
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Dropdown
