import React, { Component } from 'react'

import Formsy from 'formsy-react'
import _ from 'lodash'

import { dig } from '../lib/utils'

class SimpleForm extends Component {
  constructor(props) {
    super(props)
    this.state = { canSubmit: false }

    this.submit = this.submit.bind(this)
  }

  submit(data) {
    this.props.mutate({variables: data})
      .then(({data}) => this.handleServerResponse(data))
      .catch((error) => { console.log('there was an error sending the query', error) })
  }

  handleServerResponse(data) {
    const errors = dig(data, this.props.mutationName, 'errors')

    errors.length == 0 ?  this.handleSuccess() : this.handleServerErrors(errors)
  }

  handleServerErrors(errors) {
    this.refs.form.updateInputsWithError(_.fromPairs(errors))
  }

  handleSuccess() {

  }

  render () {
    return (
      <Formsy.Form ref="form" onValidSubmit={this.submit} onValid={this.props.enableButton} onInvalid={this.props.disableButton}>
        {this.props.children}
      </Formsy.Form>
    )
  }
}

export default SimpleForm
