import React from 'react'
import { Link } from 'react-router'

import Icomoon from '../../../components/icomoon'
import UsersTable from './components/users-table'

const Index = ({
  data
}) => (
  <div className="content-wrapper">
    <div className="page-header">
      <div className="page-header-content">
        <div className="page-title">
          <h4><Icomoon name="arrow-left52" className="position-left" /> <span className="text-semibold">Admin</span> - Benutzer</h4>
        </div>
      </div>

      <div className="breadcrumb-line breadcrumb-line-component">
        <ul className="breadcrumb">
          <li>
            <Link to="/"><Icomoon name="home2" className="position-left" /> Dashboard</Link>
          </li>
          <li><Link to="/admin">Admin</Link></li>
          <li className="active">Benutzer</li>
        </ul>
      </div>
    </div>

    <div className="content">
      <div className="panel panel-flat">
        <div className="panel-body">
          <UsersTable />
        </div>
      </div>
    </div>
  </div>
)

export default Index