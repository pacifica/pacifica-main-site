import './index.scss'
import Contribute from './Contribute.jsx'
import DataMgmt from './DataMgmt.jsx'
import HomeCarousel from './Carousel.jsx'
import Impact from './Impact.jsx'
import React from 'react'
import Solve from './Solve.jsx'

const Home = function Home () {
  return (
    <div className="home-root">
      <div className="home-carousel">
        <HomeCarousel />
      </div>
      <hr className="home-divider" />
      <div className="home-datamgmt">
        <DataMgmt />
      </div>
      <hr className="home-divider" />
      <div className="home-solve">
        <Solve />
      </div>
      <hr className="home-divider" />
      <div className="home-impact">
        <Impact />
      </div>
      <hr className="home-divider" />
      <div className="home-contrib">
        <Contribute />
      </div>
    </div>
  )
}

export default Home
