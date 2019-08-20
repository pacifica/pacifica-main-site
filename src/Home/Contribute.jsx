import { Col, Container, Row } from 'react-bootstrap'
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
                <a
                  href="https://www.pnnl.gov"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={pnnl} />
                </a>
              </div>
            </Col>
            <Col>
              <div className="solve-image">
                <a
                  href="https://www.energy.gov"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={doe} />
                </a>
              </div>
            </Col>
            <Col>
              <div className="solve-image">
                <a
                  href="https://www.emsl.pnnl.gov"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={emsl} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contribute
