import { Col, Container, Row } from 'react-bootstrap'
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
                <img
                  className="home-image"
                  src={decision}
                />
              </div>
            </Col>
            <Col>
              <div className="impact-image-block">
                <img
                  className="home-image"
                  src={develop}
                />
              </div>
            </Col>
            <Col>
              <div className="impact-image-block">
                <img
                  className="home-image"
                  src={scientists}
                />
              </div>
            </Col>
            <Col>
              <div className="impact-image-block">
                <img
                  className="home-image"
                  src={operator}
                />
              </div>
            </Col>
          </Row>
          <Row float="center">
            <Col>
              <h3 className="home-image-caption">
                {'Decision Makers'}
              </h3>
            </Col>
            <Col>
              <h3 className="home-image-caption">
                {'Developers'}
              </h3>
            </Col>
            <Col>
              <h3 className="home-image-caption">
                {'Scientists'}
              </h3>
            </Col>
            <Col>
              <h3 className="home-image-caption">
                {'Operators'}
              </h3>
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
