import React from 'react'

import RippleEffect from '../../../../components/ripple-effect'

const ProfileForm = ({

}) => (
  <form action="#">

    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="user-first-name">Vorname</label>
          <input type="text" className="form-control" name="user[first_name]" id="user-first-name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="user-last-name">Nachname</label>
          <input type="text" className="form-control" name="user[last_name]" id="user-last-name" />
        </div>
      </div>
    </div>

    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="user-email">E-Mail</label>
          <input type="email" className="form-control" name="user[email]" id="user-email" />
        </div>
        <div className="col-md-6">
          <label htmlFor="user-department-id">Ortsgruppe</label>
          <input type="text" className="form-control" name="user[department_id]" id="user-department-id" />
        </div>
      </div>
    </div>

    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="user-password">Passwort</label>
          <input type="password" className="form-control" name="user[password]" id="user-password" />
        </div>
        <div className="col-md-6">
          <label htmlFor="user-password-confirmation">Passwortwiederholung</label>
          <input type="password" className="form-control" name="user[password_confirmation]" id="user-password-confirmation" />
        </div>
      </div>
    </div>

    <div className="text-right">
      <RippleEffect>
        <button type="submit" className="btn btn-primary">Anlegen</button>
      </RippleEffect>
    </div>
  </form>
)

export default ProfileForm
