import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Table from '../../../../components/table'

const UsersTable = ({data}) => (
  <Table
    data={data}
    recordsKey="users"
    columns={{
      first_name: "Vorname",
      last_name: "Nachname",
      email: "E-Mail",
      mobile_number: "Handynummer",
      "department.name": "Gliederung",
      current_sign_in_at: "Letzter Login am",
      confirmed: "Bestätigt",
    }}
    size="xs"
  />
)

const query = gql`
  query AllUsersForAdmin {
    users {
      id      
      first_name
      last_name
      email    
      mobile_number  
      confirmed
      current_sign_in_at
      department {
        name
      }
    }
  }
`

export default graphql(query)(UsersTable)
