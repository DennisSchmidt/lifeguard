import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const NavRight = ({
  data
}) => (
  <div className="navbar-right">
    <p className="navbar-text">Hi, {!data.loading && data.me.first_name}!</p>
    <p className="navbar-text"><span className="label bg-success">Online</span></p>
  </div>
)

const query = gql`
  query CurrentUserForLayout {
    me {
      first_name      
    }
  }
`

export default graphql(query)(NavRight)
