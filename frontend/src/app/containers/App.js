import React from 'react'
import { Match, Miss } from 'react-router'

import './lib'

import '../styles/main/index.less'
import '../styles/custom/index.sass'

import Layout from './layout/index'
import routes from '../config/routes'
import NotFound from './pages/404'

const Root = () => (
  <Layout>
    {routes.map((route, i) => (
      <Match key={i} {...route}/>
    ))}

    <Miss component={NotFound}/>
  </Layout>
)

export default Root

