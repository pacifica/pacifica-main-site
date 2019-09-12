import './index.scss'
import * as serviceWorker from './serviceWorker'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

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
