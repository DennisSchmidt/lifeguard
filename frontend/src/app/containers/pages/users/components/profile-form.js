import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Formsy from 'formsy-react'

import RippleEffect from '../../../../components/ripple-effect'
import Icomoon from '../../../../components/icomoon'
import TextInput from './text-input'


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

        <div className="form-group">
          <div className="row">
            <TextInput
              label="Vorname"
              name="user[first_name]"
              wrapper={{className: 'col-md-6'}}
            />
            <TextInput
              label="Nachname"
              name="user[last_name]"
              wrapper={{className: 'col-md-6'}}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <TextInput
              label="E-Mail"
              name="user[email]"
              validations="isExisty,isEmail"
              wrapper={{className: 'col-md-6'}}
              required
              validationError="Bitte, eine korrekte E-Mail-Adresse angeben"
            />
            <TextInput
              label="Ortsgruppe"
              name="user[department_id]"
              validations="isExisty"
              wrapper={{className: 'col-md-6'}}
              required
              validationError="Bitte, Ortsgruppe auswählen"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <TextInput
              label="Passwort"
              name="user[password]"
              type="password"
              validations="isExisty"
              wrapper={{className: 'col-md-6'}}
              required
              validationError="Bitte, Passwort angeben"
            />
            <TextInput
              label="Passwortwiederholung"
              name="user[password_confirmation]"
              type="password"
              validations="equalsField:user[password]"
              wrapper={{className: 'col-md-6'}}
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

export default graphql(createUser)(ProfileForm)
