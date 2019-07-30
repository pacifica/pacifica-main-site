import { Route, BrowserRouter as Router } from 'react-router-dom'
import About from './About'
import Docs from './Docs'
import Header from './Header.jsx'
import Home from './Home'
import React from 'react'

const App = function App () {
  return (
    <Router>
      <Header />
      <Route
        component={Home}
        exact
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
    </Router>
  )
}

export default App
