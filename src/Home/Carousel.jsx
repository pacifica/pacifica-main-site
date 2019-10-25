import { Carousel } from 'react-bootstrap'
import React from 'react'
import getText from '../Utils'
import hero1 from '../assets/hero_image1.png'
import hero2 from '../assets/hero_image2.png'

const HomeCarousel = function HomeCarousel () {
  const images = [
    hero1,
    hero2
  ]
  const alttext = [
    'First Slide',
    'Second Slide'
  ]
  const { carousel } = getText().homepage
  return (
    <Carousel>
      {
        carousel.map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Carousel.Item key={`slide-${index}`}>
            <img
              alt={alttext[index]}
              className="d-block w-100"
              src={images[index]}
            />
            <Carousel.Caption>
              <p>
                {carousel[index]}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

export default HomeCarousel
