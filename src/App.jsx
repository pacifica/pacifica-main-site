import { Route, BrowserRouter as Router } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import PageRouteMap from './PageRouteMap.jsx'
import React from 'react'

const App = function App () {
  const routeList = []
  for (const [
    // eslint-disable-next-line no-unused-vars
    key,
    // eslint-disable-next-line no-unused-vars
    value
  ] of Object.entries(PageRouteMap)) {
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
