import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

class PacificaHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <h1>{this.props.header}</h1>
        </div>
        <div className="menu">
          <div className="dropdown">
            <button className="dropbtn">Home</button>
            <div className="dropdown-content">
              <Link to='/'>Home</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">About</button>
              <div className="dropdown-content">
              <Link to='/about'>About Pacifica</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Get Pacifica!</button>
            <div className="dropdown-content">
              <HashLink to='/docs#source'>Source Code</HashLink>
              <HashLink to='/docs#container'>Container</HashLink>
              <HashLink to='/docs#docs'>Documentation</HashLink>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Save Us</button>
            <div className="dropdown-content">
              <Link to='/save'>Layson Albatross</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PacificaHeader;
