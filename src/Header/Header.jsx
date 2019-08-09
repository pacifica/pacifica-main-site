import { Helmet } from 'react-helmet'
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
      <Helmet>
        <link
          crossOrigin="anonymous"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          rel="stylesheet"
        />
      </Helmet>
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
