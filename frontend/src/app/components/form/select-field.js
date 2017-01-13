import React, { Component } from 'react'
import Formsy from 'formsy-react'

import { nameToId } from '../../lib/utils'

const SelectField = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  componentDidMount() {
    $('.bootstrap-select').selectpicker()
  },

  componentDidUpdate() {
    $('.bootstrap-select').selectpicker('refresh')
  },

  render () {
    const inputId = nameToId(this.props.name)

    const stateClass = this.showRequired() ? 'required' : this.showError() ? 'has-error' : null
    const errorMessage = this.getErrorMessage()

    return (
      <div className={['form-group', stateClass].join(' ')}>
        <label htmlFor={inputId} className="control-label">{this.props.label}</label>

        <select
          className="bootstrap-select form-control"
          onChange={this.changeValue}
          name={this.props.name}
          id={inputId}
        >
          { this.props.prompt && <option className="test">{this.props.prompt}</option> }
          { this.props.renderOptions && this.props.options
              .map(({id, name}) => <option key={id} value={id}>{name}</option>)
          }
        </select>
        { errorMessage && <span className="help-block">{errorMessage}</span> }
      </div>
    )
  }
})

export default SelectField
