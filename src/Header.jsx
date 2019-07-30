import { Helmet } from 'react-helmet'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import React from 'react'
import getText from './Utils'
import logo from './Pacifica-64x64-black.png'

// eslint-disable-next-line max-lines-per-function
const Header = function Header () {
  const { title } = getText().header
  return (
    <div>
      <Helmet>
        <link
          crossOrigin="anonymous"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          rel="stylesheet"
        />
      </Helmet>
      <div className="logo-block">
        <img
          alt={title}
          src={logo}
        />
        <h1>
          {title}
        </h1>
      </div>
      <Nav activeKey="/home">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>
              {'Active'}
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/about">
            <Nav.Link>
              {'About'}
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/docs">
            <Nav.Link>
              {'Docs'}
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header
