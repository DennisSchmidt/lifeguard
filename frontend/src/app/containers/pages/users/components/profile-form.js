import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Formsy from 'formsy-react'

import RippleEffect from '../../../../components/ripple-effect'
import Icomoon from '../../../../components/icomoon'
import InputField from '../../../../components/form/input-field'
import SelectField from '../../../../components/form/select-field'


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
      .then(({ data }) => { console.log('got data', data) })
      .catch((error) => { console.log('there was an error sending the query', error) })
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  render () {
    return (
      <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>

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
            <InputField
              label="E-Mail"
              name="user[email]"
              validations="isExisty,isEmail"
              required
              validationError="Bitte, eine korrekte E-Mail-Adresse angeben"
            />
          </div>
          <div className="col-md-6">
            <SelectField
              label="Ortsgruppe"
              name="user[department_id]"
              validations="isNumeric"
              options={this.props.data.departments}
              renderOptions={!this.props.data.loading}
              prompt="Bitte Ortsgruppe wählen"
              required
              validationError="Bitte, Ortsgruppe auswählen"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <InputField
              label="Passwort"
              name="user[password]"
              type="password"
              validations="isExisty"
              required
              validationError="Bitte, Passwort angeben"
            />
          </div>
          <div className="col-md-6">
            <InputField
              label="Passwortwiederholung"
              name="user[password_confirmation]"
              type="password"
              validations="equalsField:user[password]"
              required
              validationError="Passwortwiederholung muss mit Passwort übereinstimmen"
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
    $department_id: ID
    ) {
    createUser(
      first_name: $first_name, 
      last_name: $last_name,
      email: $email, 
      password: $password, 
      password_confirmation: $password_confirmation
      department_id: $department_id
    ) {
      user {
        first_name
      }
      errors
    }
  }
`

const query = gql`
  query AllDepartments {
    departments {
      id
      name
    }
  }
`

export default compose(graphql(query), graphql(createUser))(ProfileForm)
