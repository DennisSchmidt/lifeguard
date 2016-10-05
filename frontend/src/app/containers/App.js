import React from 'react'
import { Match, Miss } from 'react-router'

import './lib'

import '../styles/main/index.less'
import '../styles/custom/index.sass'

import Layout from './layout/index'
import DashboardPage from './pages/dashboard'
import UsersPage from './pages/users/index'

const Root = () => (
  <Layout>
    <Match exactly pattern="/" component={DashboardPage} />
    <Match pattern="/admin/users" component={UsersPage} />

    <Miss component={NoMatch}/>
  </Layout>
)

export default Root

const NoMatch = ({
  location
}) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location} didn’t match any pages</p>
  </div>
)
