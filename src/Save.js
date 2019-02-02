import React, { Component } from 'react';
import PacificaHeader from './Header';

class AlbatrossSave extends Component {
    render() {
        return (
            <div>
              <PacificaHeader header="Save the Pacific Layson Albatross" />
              <p>
                Save the Pacific Layson Albatross by <a href="https://oceana.org/marine-life/seabirds/laysan-albatross">donating</a>. Also, you can <a href="https://www.theoceancleanup.com/">help</a> cleanup the <a href="https://en.wikipedia.org/wiki/Great_Pacific_garbage_patch">Great Pacific Garbage Patch</a> killing the Layson Albatross.
              </p>
            </div>
        )
    }
}

export default AlbatrossSave;
