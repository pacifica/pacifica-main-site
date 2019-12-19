import './index.scss'
import * as serviceWorker from './serviceWorker'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'

// This is standard webpack way of disabling code in development mode
// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-154816140-1')
  ReactGA.pageview(window.location.pathname + window.location.search)
}

const wrapper = document.getElementById('root')
ReactDOM.render(
  <App />,
  wrapper
)

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister()
