import React from 'react'
import { Link } from 'react-router'

import Icomoon from '../../../../components/icomoon'
import RippleEffect from '../../../../components/ripple-effect'
import MenuLink from '../../../../components/menu-link'

const Menu = () => (
  <ul className="navigation navigation-main navigation-accordion">

    <li className="navigation-header">
      <span>Admin</span> <Icomoon name="menu" title="Admin"/>
    </li>

    <Link to="/admin/users">{(params) => <MenuLink label="Nutzer" icon="users4" {...params}/>}</Link>
  </ul>
)

export default Menu
