import { Col, Container, Row } from 'react-bootstrap'
import Link from '../Link.jsx'
import React from 'react'
import doe from '../assets/doe_logo.png'
import emsl from '../assets/emsl_logo.png'
import pnnl from '../assets/pnnl_logo.png'

const Contribute = function Contribute () {
  return (
    <div className="contrib-root">
      <div className="home-title-block">
        <h2 className="home-title">
          {'Contribute'}
        </h2>
      </div>
      <div className="solve-image-block">
        <Container>
          <Row>
            <Col>
              <div className="solve-image">
                <Link to="https://www.pnnl.gov">
                  <img src={pnnl} />
                </Link>
              </div>
            </Col>
            <Col>
              <div className="solve-image">
                <Link to="https://www.energy.gov">
                  <img src={doe} />
                </Link>
              </div>
            </Col>
            <Col>
              <div className="solve-image">
                <Link to="https://www.emsl.pnnl.gov">
                  <img src={emsl} />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contribute
