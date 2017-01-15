import React, { Component } from 'react'

import Navigation from './navigation/index'
import Sidebar from './sidebar/index'

const Layout = ({
  children,
  location
}) => (
  <div>
    <Navigation />
    <main className="page-container">
      <div className="page-content">
        <Sidebar />
        {children}
      </div>
    </main>
  </div>
)

export default Layout
