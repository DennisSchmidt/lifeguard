import React, { Component } from 'react'
import Formsy from 'formsy-react'

import Icomoon from '../icomoon'
import { nameToId } from '../../lib/utils'

const InputField = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    const inputId = nameToId(this.props.name)

    const stateClass = this.showRequired() ? 'required has-feedback' : this.showError() ? 'has-error' : null
    const errorMessage = this.getErrorMessage()

    return (
      <div className={['form-group', stateClass].join(' ')}>
        <label htmlFor={inputId} className="control-label">{this.props.label}</label>
        <input
          type={this.props.type || "text"}
          className="form-control"
          name={this.props.name}
          id={inputId}
          onChange={this.changeValue}
          autoComplete="off"
        />
        { this.showRequired() && <IsRequiredIcon /> }
        { errorMessage && <span className="help-block">{errorMessage}</span> }
      </div>
    );
  }
})

export default InputField

const IsRequiredIcon = ({
  name
}) => (
  <div className="form-control-feedback text-warning">
    <Icomoon name="exclamation" />
  </div>
)
