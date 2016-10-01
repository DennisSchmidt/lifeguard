import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import Layout from './layout/index'
import WelcomePage from './pages/welcome'

const Root = () => (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={WelcomePage} />
    </Route>
  </Router>
)

export default Root
