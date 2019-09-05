import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import collab from '../assets/collaboration_icon.png'
import getText from '../Utils'
import sharing from '../assets/sharing_icon.png'
import velocity from '../assets/velocity_icon.png'

// eslint-disable-next-line max-lines-per-function
const DataMgmt = function DataMgmt () {
  const { homepage } = getText()
  return (
    <div className="datamgmt-root">
      <div className="home-title-block">
        <h2 className="home-title">
          {'Data Management'}
        </h2>
      </div>
      <div className="home-image-blocks">
        <Container>
          <Row>
            <Col>
              <div className="datamgmt-image-block">
                <img
                  className="home-image"
                  src={collab}
                />
              </div>
            </Col>
            <Col>
              <div className="datamgmt-image-block">
                <img
                  className="home-image"
                  src={sharing}
                />
              </div>
            </Col>
            <Col>
              <div className="datamgmt-image-block">
                <img
                  className="home-image"
                  src={velocity}
                />
              </div>
            </Col>
          </Row>
          <Row float="center">
            <Col>
              <h3 className="home-image-caption">
                {`COLLABORATION`}
              </h3>
            </Col>
            <Col>
              <h3 className="home-image-caption">
                {`SHARING`}
              </h3>
            </Col>
            <Col>
              <h3 className="home-image-caption">
                {`VELOCITY`}
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-text-block">
        <p className="home-text">
          {homepage.datamgmtblock}
        </p>
      </div>
    </div>
  )
}

export default DataMgmt
