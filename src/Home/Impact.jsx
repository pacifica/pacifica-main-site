import { Col, Container, Row } from 'react-bootstrap'
<<<<<<< HEAD
import { LinkContainer } from 'react-router-bootstrap'
=======
import Link from '../Link.jsx'
>>>>>>> add links to home page images; modularize internal/external link; closes #43
import React from 'react'
import decision from '../assets/decision_icon.png'
import develop from '../assets/developers_icon.png'
import getText from '../Utils'
import operator from '../assets/operations_icon.png'
import scientists from '../assets/scientists_icon.png'

// eslint-disable-next-line max-lines-per-function
const Impact = function Impact () {
  const { homepage } = getText()
  return (
    <div className="impact-root">
      <div className="home-title-block">
        <h2 className="home-title">
          {'Impact'}
        </h2>
      </div>
      <div className="home-image-blocks">
        <Container>
          <Row>
            <Col>
              <div className="impact-image-block">
                <Link to="/leaders">
                  <img
                    className="home-image"
                    src={decision}
                  />
                </Link>
              </div>
            </Col>
            <Col>
              <div className="impact-image-block">
                <Link to="https://github.com/pacifica/pacifica/wiki/Pacifica-Developers">
                  <img
                    className="home-image"
                    src={develop}
                  />
                </Link>
              </div>
            </Col>
            <Col>
              <div className="impact-image-block">
                <Link to="https://github.com/pacifica/pacifica/wiki/Pacifica-Users">
                  <img
                    className="home-image"
                    src={scientists}
                  />
                </Link>
              </div>
            </Col>
            <Col>
              <div className="impact-image-block">
                <Link to="https://github.com/pacifica/pacifica/wiki/Pacifica-Operators">
                  <img
                    className="home-image"
                    src={operator}
                  />
                </Link>
              </div>
            </Col>
          </Row>
          <Row float="center">
            <Col>
              <Link to="/leaders">
                <h3 className="home-image-caption">
                  {'Decision Makers'}
                </h3>
              </Link>
            </Col>
            <Col>
              <Link to="https://github.com/pacifica/pacifica/wiki/Pacifica-Developers">
                <h3 className="home-image-caption">
                  {'Developers'}
                </h3>
              </Link>
            </Col>
            <Col>
              <Link to="https://github.com/pacifica/pacifica/wiki/Pacifica-Developers">
                <h3 className="home-image-caption">
                  {'Scientists'}
                </h3>
              </Link>
            </Col>
            <Col>
              <Link to="https://github.com/pacifica/pacifica/wiki/Pacifica-Developers">
                <h3 className="home-image-caption">
                  {'Operators'}
                </h3>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-text-block">
        <p className="home-text">
          {homepage.impactblock}
        </p>
      </div>
    </div>
  )
}

export default Impact
