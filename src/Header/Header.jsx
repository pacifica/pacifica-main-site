import { LinkContainer } from 'react-router-bootstrap'
import React from 'react'
import getText from '../Utils'
import logo from '../assets/Pacifica-Border-64x64.png'
// I'm not sure why this isn't sorting properly
// eslint-disable-next-line sort-imports
import NavDropdown from './NavDropdown.jsx'

const Header = function Header () {
  const { title, subtitle } = getText().header
  return (
    <div className="header">
      <LinkContainer to="/">
        <div className="logo-block">
          <div className="logo-img-block">
            <img
              alt={title}
              className="logo"
              src={logo}
            />
          </div>
          <div className="logo-title-block">
            <h1>
              {title}
            </h1>
            <h5>
              {subtitle}
            </h5>
          </div>
        </div>
      </LinkContainer>
      <div className="break-bar">
        <NavDropdown />
      </div>
    </div>
  )
}

export default Header
