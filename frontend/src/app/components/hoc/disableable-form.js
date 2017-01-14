import React, { Component } from 'react'

const disableableForm = (WrappedForm) => {
  return class DisableableForm extends Component {
    constructor(props) {
      super(props)
      this.state = { canSubmit: false }

      this.disableButton = this.disableButton.bind(this)
      this.enableButton = this.enableButton.bind(this)
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
        canSubmit: this.state.canSubmit
      }

      return <WrappedForm {...this.props} {...formOptions} />
    }
  }
}

export default disableableForm
