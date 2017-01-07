import React from 'react'

const New = ({

}) => (
  <div className="content-wrapper">
    <div className="page-header">
      <div className="page-header-content">
        <div className="page-title">
          <h4><Icomoon name="arrow-left52" className="position-left" /> <span className="text-semibold">Admin</span> - Benutzer anlegen</h4>
        </div>
      </div>

      <div className="breadcrumb-line breadcrumb-line-component">
        <ul className="breadcrumb">
          <li>
            <Link to="/"><Icomoon name="home2" className="position-left" /> Dashboard</Link>
          </li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/admin/users">Benutzer</Link></li>
          <li className="active">Anlegen</li>
        </ul>
      </div>
    </div>
  </div>
)

export default New
