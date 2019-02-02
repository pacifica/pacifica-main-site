import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PacificaCarousel from './Carousel.js';
import PacificaAbout from './About.js';
import PacificaDocs from './ReadTheDocs.js';
import AlbatrossSave from './Save.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="aspectwrapper">
        <div className="content">
          <Router>
            <div>
              <Route exact path="/" component={PacificaCarousel} />
              <Route path="/about" component={PacificaAbout} />
              <Route path="/docs" component={PacificaDocs} />
              <Route path="/save" component={AlbatrossSave} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
