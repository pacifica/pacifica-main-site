import React from 'react'
import getText from '../Utils'

const Mission = function Mission () {
  const { mission, vision } = getText()
  return (
    <div>
      <div className="home-text-block">
        <h2>
          {`Mission`}
        </h2>
      </div>
      <div className="home-text-block">
        <p className="home-text">
          {mission}
        </p>
      </div>
      <hr className="home-divider" />
      <div className="home-text-block">
        <h3>
          {`Vision`}
        </h3>
      </div>
      <div className="home-text-block">
        <p className="home-text">
          {vision}
        </p>
      </div>
    </div>
  )
}

export default Mission
