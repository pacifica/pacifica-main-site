import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PacificaAbout extends Component {
    render() {
        return (
            <div>
              <h1>About Pacifica</h1>
              <Link to="/">Home</Link>
              <p>
                This is an about page that should contain information about Pacifica and its goals.
              </p>
            </div>
        )
    }
}

export default PacificaAbout;
