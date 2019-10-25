import React from 'react'
import getText from '../Utils'
import solveit from '../assets/solveit.png'

const Solve = function Solve () {
  const { homepage } = getText()
  return (
    <div className="solve-root">
      <div className="home-title-block">
        <h2 className="home-title">
          {'How To Solve It!'}
        </h2>
      </div>
      <div className="solve-image-block">
        <div className="solve-image">
          <img src={solveit} />
        </div>
      </div>
      <div className="home-text-block">
        <p className="home-text">
          {homepage.solveblock}
        </p>
      </div>
    </div>
  )
}

export default Solve
