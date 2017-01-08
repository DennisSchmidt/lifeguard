import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { asyncText } from '../../../../lib/text'

import Icomoon from '../../../../components/icomoon'
import RippleEffect from '../../../../components/ripple-effect'
import './user.sass'

const User = ({
  data
}) => (
  <div className="sidebar-user-material">
    <div className="category-content">
      <div className="sidebar-user-material-content">
        <RippleEffect>
          <a href="#">
            <img src={require("./avatar.jpg")} className="img-circle img-responsive" alt="" />
          </a>
        </RippleEffect>

        <h6>{asyncText(data, ["me.first_name", "me.last_name"])}</h6>
        <span className="text-size-small">{asyncText(data, ["me.department.name"])}</span>
      </div>

      <div className="sidebar-user-material-menu">
        <RippleEffect>
          <a href="#user-nav" data-toggle="collapse">
            <span>Mein Account</span> <i className="caret" />
          </a>
        </RippleEffect>
      </div>
    </div>

    <div className="navigation-wrapper collapse" id="user-nav">
      <ul className="navigation">
        <li>
          <a href="#">
            <Icomoon name="user-plus" /> <span>Profil</span>
          </a>
        </li>
        <li>
          <a href="#">
            <Icomoon name="user-coins" /> <span>Konto</span>
          </a>
        </li>
        <li>
          <a href="#">
            <Icomoon name="comment-discussion" />
            <span><span className="badge bg-teal-400 pull-right">58</span> Nachrichten</span>
          </a>
        </li>
        <li className="divider" />
        <li>
          <a href="#">
            <Icomoon name="cog5" /> <span>Einstellungen</span>
          </a>
        </li>
        <li>
          <a href="/logout">
            <Icomoon name="switch2" /> <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

const query = gql`
  query CurrentUserForLayout {
    me {
      id      
      first_name
      last_name
      department {
        name
      }
    }
  }
`

export default graphql(query)(User)
