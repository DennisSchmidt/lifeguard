import React from 'react'
import { Link } from 'react-router'

import Icomoon from '../../../components/icomoon'
import NavRight from './components/nav-right'

import './styles.sass'

const Navigation = () => (
  <div className="navbar navbar-default navbar-fixed-top header-highlight">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Pelikan 261</Link>

      <ul className="nav navbar-nav visible-xs-block">
        <li>
          <a data-toggle="collapse" data-target="#navbar-mobile">
            <Icomoon name="tree5" />
          </a>
        </li>
        <li>
          <a className="sidebar-mobile-main-toggle">
            <Icomoon name="paragraph-justify3" />
          </a>
        </li>
      </ul>
    </div>

    <div className="navbar-collapse collapse" id="navbar-mobile">
      <ul className="nav navbar-nav">
        <li>
          <a className="sidebar-control sidebar-main-toggle hidden-xs">
            <Icomoon name="paragraph-justify3" />
          </a>
        </li>
      </ul>

      <NavRight />
    </div>
  </div>
)



export default Navigation
