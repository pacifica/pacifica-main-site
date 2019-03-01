import React, { Component } from 'react';
import PacificaHeader from './Header';

class AlbatrossSave extends Component {
    render() {
        return (
            <div>
              <PacificaHeader header="Save the Pacific Layson Albatross" />
              <div>
                <h2 className="subtitle">In the Beginning</h2>
                <p>
            Managing scientific data at the institutional level is equivilent to boiling the ocean.
            This analogy for describing the difficulty of the problem has been with Pacifica since
            its inception. As a result we have adopted and expanded the analogy in many ways. The
            name of the project is derived from the Pacific Ocean, the largest ocean on the planet.
            The project mascot, the Layson Albatross, is an ocean migratory sea bird, who ranges
            over the entire north Pacific.
                </p>
                <h2 className="subtitle">The Layson Albatross Problem</h2>
                <p>
            The Layson Albatross, like most ocean migratory sea birds, are vulnerable to ocean
            pollutants. The pollutant that is most affecting the Layson is plastic. Plastic floating
            on the oceans surface is often confused for food. The plastic does not break down and as
            a result will often starve the Layson.
                </p>
                <h2 className="subtitle">Help Solve the Problem</h2>
                <p>
            Save the Pacific Layson Albatross by <a
            href="https://oceana.org/marine-life/seabirds/laysan-albatross">donating</a>. Also,
            you can <a href="https://www.theoceancleanup.com/">help</a> cleanup the <a
            href="https://en.wikipedia.org/wiki/Great_Pacific_garbage_patch">Great Pacific Garbage
            Patch</a> killing the Layson Albatross.
                </p>
              </div>
            </div>
        )
    }
}

export default AlbatrossSave;
