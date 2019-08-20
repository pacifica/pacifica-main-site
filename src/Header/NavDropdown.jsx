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
              key="Decision Makers"
              name="Decision Makers"
              to="/leaders"
            />,
            <DropdownItem
              key="Developers"
              name="Developers"
              to="https://github.com/pacifica/pacifica/wiki/Pacifica-Developers"
            />,
            <DropdownItem
              key="Scientists"
              name="Scientists"
              to="https://github.com/pacifica/pacifica/wiki/Pacifica-Users"
            />,
            <DropdownItem
              key="Operators"
              name="Operators"
              to="https://github.com/pacifica/pacifica/wiki/Pacifica-Operators"
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
              key="Python"
              name="Python"
              to="/python"
            />,
            <DropdownItem
              key="Source"
              name="Source"
              to="https://github.com/pacifica/pacifica"
            />
          ]}
        />
      </Navbar>
    </div>
  )
}

export default NavDropdown
