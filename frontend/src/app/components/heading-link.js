import React, { Component } from 'react'

import Icomoon from './icomoon'
import RippleEffect from './ripple-effect'

const HeadingLink = ({ onClick, href, icon, label }) => (
  <RippleEffect>
    <a href={href} onClick={onClick} className="btn btn-link btn-float text-size-small has-text">
      <Icomoon name={icon} className="text-primary"/>
      <span>{label}</span>
    </a>
  </RippleEffect>
)

export default HeadingLink
