import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Formsy from 'formsy-react'
import _ from 'lodash'

import { dig } from '../../../../lib/utils'
import RippleEffect from '../../../../components/ripple-effect'
import Icomoon from '../../../../components/icomoon'
import InputField from '../../../../components/form-fields/input-field'
import SelectField from '../../../../components/form-fields/select-field'


class ProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = { canSubmit: false }

    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit(data) {
    this.props.mutate({variables: data.user})
      .then(({data}) => this.handleServerResponse(data))
      .catch((error) => { console.log('there was an error sending the query', error) })
  }

  handleServerResponse(data) {
    const errors = dig(data, 'createUser', 'errors')

    errors.length == 0 ?  this.handleSuccess() : this.handleServerErrors(errors)
  }

  handleServerErrors(errors) {
    this.refs.form.updateInputsWithError(_.fromPairs(errors.map(error => [`user[${error[0]}]`, error[1]])));
  }

  handleSuccess() {

  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  render () {
    return (
      <Formsy.Form ref="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>

        <div className="row">
          <div className="col-md-6">
            <InputField label="Vorname" name="user[first_name]"/>
          </div>
          <div className="col-md-6">
            <InputField label="Nachname" name="user[last_name]"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <SelectField
              label="Fähigkeiten"
              name="user[skill_ids]"
              validations="isExisty"
              options={this.props.data.skills}
              loading={this.props.data.loading}
              prompt="Bitte Fähigkeiten wählen"
              multiple
              required
              validationError="Bitte Fähigkeiten auswählen"
            />
          </div>
          <div className="col-md-6">
            <SelectField
              label="Ortsgruppe"
              name="user[department_id]"
              validations="isNumeric"
              options={this.props.data.departments}
              loading={this.props.data.loading}
              prompt="Bitte Ortsgruppe wählen"
              required
              validationError="Bitte Ortsgruppe auswählen"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <InputField
              label="E-Mail"
              name="user[email]"
              validations="isExisty,isEmail"
              required
              validationError="Bitte eine korrekte E-Mail-Adresse angeben"
            />
          </div>
          <div className="col-md-4">
            <InputField
              label="Passwort"
              name="user[password]"
              type="password"
              validations="isExisty"
              required
              validationError="Bitte Passwort angeben"
            />
          </div>
          <div className="col-md-4">
            <InputField
              label="Passwortbestätigung"
              name="user[password_confirmation]"
              type="password"
              validations="equalsField:user[password]"
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
      </Formsy.Form>
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

const query = gql`
  query AllDepartmentAndSkills {
    departments {
      id
      name
    }
    skills {
      id
      name
    }
  }
`

export default compose(graphql(query), graphql(createUser))(ProfileForm)
