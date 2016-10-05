import React from 'react'

import User from './components/user'
import Menu from './components/menu'

const Sidebar = () => (
  <div className="sidebar sidebar-main">
    <div className="sidebar-content">
      <User />

      <div className="sidebar-category sidebar-category-visible">
        <div className="category-content no-padding">
          <Menu />
        </div>
      </div>

    </div>
  </div>
)

export default Sidebar
