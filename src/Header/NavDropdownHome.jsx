import React from 'react'
// eslint-disable-next-line sort-imports
import { LinkContainer } from 'react-router-bootstrap'
import { NavDropdown } from 'react-bootstrap'

const NavDropdownHome = function NavDropdownHome () {
  return (
    <NavDropdown
      id="home-nav-dropdown"
      title="Home"
    >
      <LinkContainer to="/">
        <NavDropdown.Item>
          {'Home'}
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavDropdown.Item>
          {'About'}
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/history">
        <NavDropdown.Item>
          {'History'}
        </NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  )
}

export default NavDropdownHome
