import { Route, BrowserRouter as Router } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Docker from './Docker'
import Docs from './Docs'
import Footer from './Footer'
import Getit from './Getit'
import Header from './Header'
import History from './History'
import Home from './Home'
import Leaders from './Leaders'
import Mission from './Mission'
import Python from './Python'
import React from 'react'

const App = function App () {
  const compPathMap = {
    about: About,
    contact: Contact,
    docker: Docker,
    docs: Docs,
    getit: Getit,
    history: History,
    leaders: Leaders,
    mission: Mission,
    python: Python
  }
  const routeList = []
  for (const [
    key,
    value
  ] of Object.entries(compPathMap)) {
    routeList.push((
      <Route
        component={value}
        key={`root-route-${key}`}
        path={`/${key}`}
      />
    ))
  }
  return (
    <div className="root-float">
      <Router>
        <Header />
        <Route
          component={Home}
          exact
          path="/"
        />
        {routeList}
        <Footer />
      </Router>
    </div>
  )
}

export default App
