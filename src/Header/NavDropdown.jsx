import React from 'react'
// eslint-disable-next-line sort-imports
import { Navbar } from 'react-bootstrap'
// eslint-disable-next-line sort-imports
import NavDropdownDocs from './NavDropdownDocs.jsx'
import NavDropdownDown from './NavDropdownDown.jsx'
import NavDropdownHome from './NavDropdownHome.jsx'

const NavDropdown = function NavDropdown () {
  return (
    <div className="nav-bar">
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavDropdownHome />
        <NavDropdownDocs />
        <NavDropdownDown />
      </Navbar>
    </div>
  )
}

export default NavDropdown
