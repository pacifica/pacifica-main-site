import React from 'react'
// eslint-disable-next-line sort-imports
import { LinkContainer } from 'react-router-bootstrap'
import { NavDropdown } from 'react-bootstrap'

const NavDropdownDocs = function NavDropdownDocs () {
  return (
    <NavDropdown
      id="docs-nav-dropdown"
      title="Docs"
    >
      <LinkContainer to="/devs">
        <NavDropdown.Item>
          {'Developers'}
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/users">
        <NavDropdown.Item>
          {'Scientists'}
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/ops">
        <NavDropdown.Item>
          {'Operators'}
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/leaders">
        <NavDropdown.Item>
          {'Decision Makers'}
        </NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  )
}

export default NavDropdownDocs
