import { Route, BrowserRouter as Router } from 'react-router-dom'
import About from './About'
import Docs from './Docs'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import React from 'react'

const App = function App () {
  return (
    <div className="root-float">
      <Router>
        <Header />
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={About}
          path="/about"
        />
        <Route
          component={Docs}
          path="/docs"
        />
        <Footer />
      </Router>
    </div>
  )
}

export default App
