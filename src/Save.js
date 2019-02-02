import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbatrossSave extends Component {
    render() {
        return (
            <div>
              <h1>Save the Pacific Layson Albatros</h1>
              <Link to="/">Home</Link>
              <p>
                Save the Pacific Layson Albatros by <a href="https://oceana.org/marine-life/seabirds/laysan-albatross">donating</a>. Also, you can <a href="https://www.theoceancleanup.com/">help</a> cleanup the <a href="https://en.wikipedia.org/wiki/Great_Pacific_garbage_patch">Great Pacific Garbage Patch</a> killing the Layson Albatros.
              </p>
            </div>
        )
    }
}

export default AlbatrossSave;
