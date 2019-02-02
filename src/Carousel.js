import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import flying_1 from './flying-1.jpg';
import earth_2 from './earth-2.png';
import flying_3 from './flying-3.jpg';
import flying_4 from './flying-4.jpg';
import plastic_1 from './plastic-1.jpg';

class PacificaCarousel extends Component {
  render() {
    return (
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
          <div>
            <Link to='/'>
            <img src={flying_1} alt="Laysan Albatross" />
            <p className="legend">
              Laysan Albatros
            </p>
            </Link>
          </div>
          <div>
            <Link to='/about'>
            <img src={earth_2} alt="North Pacific Ocean" />
            <p className="legend">
              The North Pacific Ocean
            </p>
            </Link>
          </div>
          <div>
            <Link to='/docs'>
            <img src={flying_3} alt="Laysan Albatross" />
            <p className="legend">
              Laysan Albatros
            </p>
            </Link>
          </div>
          <div>
            <img src={flying_4} alt="Laysan Albatross" />
            <p className="legend">
              Laysan Albatros
            </p>
          </div>
          <div>
            <Link to='/save'>
            <img src={plastic_1} alt="Save the Laysan Albatross" />
            <p className="legend">
              Save the Laysan Albatross
            </p>
            </Link>
          </div>
        </Carousel>
    );
  }
}

export default PacificaCarousel;
