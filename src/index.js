import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import cfgstore from './store'
import simpleAction from './actions/simple'
import * as serviceWorker from './serviceWorker'

const store = cfgstore()
store.dispatch(simpleAction())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()