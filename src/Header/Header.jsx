import React from 'react'
import getText from '../Utils'
import logo from '../assets/Pacifica-64x64-black.png'
// I'm not sure why this isn't sorting properly
// eslint-disable-next-line sort-imports
import NavDropdown from './NavDropdown.jsx'

const Header = function Header () {
  const { title } = getText().header
  return (
    <div className="header">
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
        </div>
      </div>
      <div className="break-bar">
        <NavDropdown />
      </div>
    </div>
  )
}

export default Header
