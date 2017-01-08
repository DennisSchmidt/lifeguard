import React from 'react'
import { Link } from 'react-router'

import Icomoon from '../../../components/icomoon'
import ProfileForm from './components/profile-form'

const New = ({

}) => (
  <div className="content-wrapper">
    <div className="page-header">
      <div className="page-header-content">
        <div className="page-title">
          <h4>
            <Icomoon name="arrow-left52" className="position-left" />
            <span className="text-semibold">Admin</span> - Nutzer anlegen
          </h4>
        </div>
      </div>

      <div className="breadcrumb-line breadcrumb-line-component">
        <ul className="breadcrumb">
          <li>
            <Link to="/"><Icomoon name="home2" className="position-left" /> Dashboard</Link>
          </li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/admin/users">Nutzer</Link></li>
          <li className="active">Anlegen</li>
        </ul>
      </div>
    </div>

    <div className="content">

      <div className="row">
        <div className="col-lg-9">

          <div className="panel panel-flat">

            <div className="panel-heading">
              <h6 className="panel-title">Profil</h6>
            </div>

            <div className="panel-body">
              <ProfileForm />
            </div>

          </div>

        </div>
      </div>

    </div>

  </div>
)

export default New
