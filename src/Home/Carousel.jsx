import { Carousel } from 'react-bootstrap'
import React from 'react'

function HomeCarousel () {
  return (
      <Carousel>
          <Carousel.Item>
              <img
                  alt="First slide"
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
              />
              <Carousel.Caption>
                  <h3>
First slide label
                  </h3>
                  <p>
Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  alt="Third slide"
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
              />

              <Carousel.Caption>
                  <h3>
Second slide label
                  </h3>
                  <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  alt="Third slide"
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
              />

              <Carousel.Caption>
                  <h3>
Third slide label
                  </h3>
                  <p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  )
}

export default HomeCarousel
