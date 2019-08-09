import Dropdown from './Dropdown.jsx'
import DropdownItem from './DropdownItem.jsx'
import { Navbar } from 'react-bootstrap'
import React from 'react'

// eslint-disable-next-line max-lines-per-function
const NavDropdown = function NavDropdown () {
  return (
    <div className="pacifica-navbar">
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Dropdown
          items={[
            <DropdownItem
              key="About"
              name="About"
              to="/about"
            />,
            <DropdownItem
              key="Mission"
              name="Mission"
              to="/mission"
            />,
            <DropdownItem
              key="History"
              name="History"
              to="/history"
            />,
            <DropdownItem
              key="Contact"
              name="Contact"
              to="/contact"
            />
          ]}
        />
        {
          // eslint-disable-next-line react/forbid-component-props
          <Navbar.Brand className="pacifica-dropdownDivider" />
        }
        <Dropdown
          items={[
            <DropdownItem
              key="Docs"
              name="Docs"
              to="/docs"
            />,
            <DropdownItem
              key="Developers"
              name="Developers"
              to="/devs"
            />,
            <DropdownItem
              key="Scientists"
              name="Scientists"
              to="/users"
            />,
            <DropdownItem
              key="Operators"
              name="Operators"
              to="/ops"
            />,
            <DropdownItem
              key="Decision Makers"
              name="Decision Makers"
              to="/leaders"
            />
          ]}
        />
        {
          // eslint-disable-next-line react/forbid-component-props
          <Navbar.Brand className="pacifica-dropdownDivider" />
        }
        <Dropdown
          items={[
            <DropdownItem
              key="Get It!"
              name="Get It!"
              to="/getit"
            />,
            <DropdownItem
              key="Docker"
              name="Docker"
              to="/docker"
            />,
            <DropdownItem
              key="PyPy"
              name="PyPy"
              to="/users"
            />,
            <DropdownItem
              key="Github"
              name="Github"
              to="/ops"
            />
          ]}
        />
      </Navbar>
    </div>
  )
}

export default NavDropdown
