import React from 'react'
// eslint-disable-next-line sort-imports
import { LinkContainer } from 'react-router-bootstrap'
import { NavDropdown } from 'react-bootstrap'

const NavDropdownDown = function NavDropdownDown () {
  return (
    <NavDropdown
      id="down-nav-dropdown"
      title="Get It!"
    >
      <LinkContainer to="/docker">
        <NavDropdown.Item>
          {'Docker'}
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/users">
        <NavDropdown.Item>
          {'PyPi'}
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/ops">
        <NavDropdown.Item>
          {'Github'}
        </NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  )
}

export default NavDropdownDown
