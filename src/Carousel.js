import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import flying_1 from './flying-1.png';
import earth_2 from './earth-2.png';
import flying_3 from './flying-3.png';
import plastic_1 from './plastic-1.png';

class PacificaCarousel extends Component {
  render() {
    return (
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
          <div>
            <Link to='/'>
            <img src={flying_1} alt="Pacifica Scientific Data Management" />
            <div id="titleblock" className="legend">
            <div className="titles">
            <div className="titletext">
              Pacifica Software
            </div>
            <div className="subtitletext">
              Scientific Data Management
            </div>
            </div>
            </div>
            </Link>
          </div>
          <div>
            <Link to='/about'>
            <img src={earth_2} alt="About Pacifica" />
            <div id="titleblock" className="legend">
            <div className="titletext">
              What is Pacifica?
            </div>
            </div>
            </Link>
          </div>
          <div>
            <Link to='/docs'>
            <img src={flying_3} alt="Documentation" />
            <div id="titleblock" className="legend">
            <div className="titles">
            <div className="titletext">
              Get Pacifica
            </div>
            <div className="subtitletext">
              Source Code and Documentation
            </div>
            </div>
            </div>
            </Link>
          </div>
          <div>
            <Link to='/save'>
            <img src={plastic_1} alt="Save the Laysan Albatross" />
            <div id="titleblock" className="legend">
            <div className="titletext">
              Save the Laysan Albatross
            </div>
            </div>
            </Link>
          </div>
        </Carousel>
    );
  }
}

export default PacificaCarousel;
