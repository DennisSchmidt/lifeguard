import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Table from '../../../../components/table'
import TableCount from '../../../../components/table-count'
import Pagination from '../../../../components/pagination'

const UsersTable = ({
  loading, users, pagination, loadPage
}) => (
  <div className="panel panel-white">
    <div className="panel-heading">
      <div className="row">
        <div className="col-lg-8"></div>
        <div className="col-lg-4 text-right">
          <Pagination {...pagination} loadPage={loadPage} />
        </div>
      </div>
    </div>
    <Table
      loading={loading}
      items={users}
      columns={{
        first_name: "Vorname",
        last_name: "Nachname",
        email: "E-Mail",
        mobile_number: "Handynummer",
        "department.name": "Gliederung",
        current_sign_in_at: "Letzter Login am",
        confirmed: "Bestätigt",
      }}
      size="sm"
    />
    <div className="panel-footer">
      <div className="heading-elements not-collapsible">
        <TableCount {...pagination} label="Nutzern" />
        <Pagination {...pagination} loadPage={loadPage} className="pull-right"/>
      </div>
    </div>
  </div>
)

const query = gql`
  query AllUsersForAdmin($page: Int, $per: Int) {
    users(page: $page, per: $per) {
      items {
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
      meta {
        pagination {
          current_page
          next_page
          prev_page
          total_count
          total_pages
          per_page
        }
      }
    }
  }
`

export default graphql(
  query,
  {
    options: (props) => ({
      variables: {
        page: 1,
        per: 10
      }
    }),
    props: ({ data: { loading, users, fetchMore } }) => ({
      loading,
      users: loading ? [] : users.items,
      pagination: loading ? {} : users.meta.pagination,
      loadPage: (page) => (
        fetchMore({
          variables: {page: page},
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult.data) return previousResult

            return {
              ...previousResult,
              users: fetchMoreResult.data.users
            }
          },
        })
      )
    })
  }
)(UsersTable)
