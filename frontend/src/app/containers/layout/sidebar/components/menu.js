import React from 'react'
import { Link } from 'react-router'

import Icomoon from '../../../../components/icomoon'
import RippleEffect from '../../../../components/ripple-effect'

const Menu = () => (
  <ul className="navigation navigation-main navigation-accordion">

    <li className="navigation-header">
      <span>Admin</span> <Icomoon name="menu" title="Admin"/>
    </li>
    <li className="active">
      <RippleEffect>
        <Link to="/admin/users"><Icomoon name="users4"/> <span>Benutzer</span></Link>
      </RippleEffect>
    </li>

  </ul>
)

export default Menu
