import React, { Component } from 'react'
import Redirect from 'react-router/Redirect'

//TODO: rename this HOC because it holds more functionality
const disableableForm = (WrappedForm) => {
  return class DisableableForm extends Component {
    constructor(props) {
      super(props)
      this.state = { canSubmit: false, canRedirect: false }

      this.disableButton = this.disableButton.bind(this)
      this.enableButton = this.enableButton.bind(this)
      this.redirect = this.redirect.bind(this)
    }

    enableButton() {
      this.setState({ canSubmit: true })
    }

    disableButton() {
      this.setState({ canSubmit: false })
    }

    // TODO: redirect with message
    redirect() {
      this.setState({ canRedirect: true })
    }

    render () {
      const formOptions = {
        enableButton: this.enableButton,
        disableButton: this.disableButton,
        redirect: this.redirect,
        mutate: this.props.mutate,
        canSubmit: this.state.canSubmit
      }

      return (
        this.state.canRedirect
        ? <Redirect to="/admin/users" />  //TODO: make this a property which can be passed via the HOC
        : <WrappedForm {...this.props} {...formOptions} />
      )
    }
  }
}

export default disableableForm
