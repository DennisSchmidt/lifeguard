import React, { Component } from 'react'

import Icomoon from './icomoon'
import RippleEffect from './ripple-effect'

const MenuLink = ({ onClick, href, isActive, icon, label }) => (
  <li className={isActive ? 'active' : ''}>
    <RippleEffect>
      <a href={href} onClick={onClick}>
        <Icomoon name={icon}/> <span>{label}</span>
      </a>
    </RippleEffect>
  </li>
)

export default MenuLink
