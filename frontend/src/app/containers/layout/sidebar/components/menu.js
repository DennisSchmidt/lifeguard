import React from 'react'
import { Link } from 'react-router'

import Icomoon from '../../../../components/icomoon'

const Menu = () => (
  <ul className="navigation navigation-main navigation-accordion">

    <li className="navigation-header">
      <span>Admin</span> <Icomoon name="menu" title="Admin"/>
    </li>
    <li className="active">
      <Link to="/admin/users"><Icomoon name="cog5"/> <span>Benutzer</span></Link>
    </li>

  </ul>
)

export default Menu
