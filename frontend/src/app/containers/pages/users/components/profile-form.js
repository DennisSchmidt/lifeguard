import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


import SimpleForm from '../../../../components/form'
import RippleEffect from '../../../../components/ripple-effect'
import Icomoon from '../../../../components/icomoon'
import InputField from '../../../../components/form-fields/input-field'

import SkillsSelect from './skills-select'
import DepartmentSelect from './department-select'


class ProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = { canSubmit: false }

    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
  }

  componentDidUpdate() {
    console.log("update...")
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  render () {
    const formOptions = {
      enableButton: this.enableButton,
      disableButton: this.disableButton,
      mutate: this.props.mutate,
      mutationName: 'createUser'
    }

    return (
      <SimpleForm { ...formOptions } >

        <div className="row">
          <div className="col-md-6">
            <InputField label="Vorname" name="first_name"/>
          </div>
          <div className="col-md-6">
            <InputField label="Nachname" name="last_name"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <SkillsSelect/>
          </div>
          <div className="col-md-6">
            <DepartmentSelect />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <InputField
              label="E-Mail"
              name="email"
              validations="isExisty,isEmail"
              required
              validationError="Bitte eine korrekte E-Mail-Adresse angeben"
            />
          </div>
          <div className="col-md-4">
            <InputField
              label="Passwort"
              name="password"
              type="password"
              validations="isExisty"
              required
              validationError="Bitte Passwort angeben"
            />
          </div>
          <div className="col-md-4">
            <InputField
              label="Passwortbestätigung"
              name="password_confirmation"
              type="password"
              validations="equalsField:password"
              required
              validationError="Passwortbestätigung muss mit Passwort übereinstimmen"
            />
          </div>
        </div>

        <div className="text-right">
          <RippleEffect>
            <button type="submit" disabled={!this.state.canSubmit} className="btn btn-primary btn-labeled">
              <b><Icomoon name="floppy-disk" /></b>
              Anlegen
            </button>
          </RippleEffect>
        </div>
      </SimpleForm>
    )
  }
}

const createUser = gql`
  mutation createUser(
    $first_name: String, 
    $last_name: String, 
    $email: String, 
    $password: String, 
    $password_confirmation: String, 
    $department_id: ID,
    $skill_ids: [ID]
    ) {
    createUser(
      first_name: $first_name, 
      last_name: $last_name,
      email: $email, 
      password: $password, 
      password_confirmation: $password_confirmation
      department_id: $department_id
      skill_ids: $skill_ids
    ) {
      user {
        first_name
      }
      errors
    }
  }
`

export default graphql(createUser)(ProfileForm)
