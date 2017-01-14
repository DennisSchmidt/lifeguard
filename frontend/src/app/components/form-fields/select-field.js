import React, { Component } from 'react'
import Formsy from 'formsy-react'

import { nameToId } from '../../lib/utils'

const SelectField = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  componentDidMount() {
    $(this.refs.selectField).selectpicker(settings(this.props))
  },

  componentDidUpdate() {
    $(this.refs.selectField).selectpicker('refresh')
  },

  render () {
    const inputId = nameToId(this.props.name)

    const stateClass = this.showRequired() ? 'required' : this.showError() ? 'has-error' : null
    const errorMessage = this.getErrorMessage()

    return (
      <div className={['form-group', stateClass].join(' ')}>
        <label htmlFor={inputId} className="control-label">{this.props.label}</label>

        <select
          ref="selectField"
          className="bootstrap-select form-control"
          onChange={this.changeValue}
          name={this.props.name}
          id={inputId}
          multiple={this.props.multiple}
        >
          {selectOptions(this.props).map(
            ({id, name}) => <option key={id} value={id}>{name}</option>
          )}
        </select>
        { errorMessage && <span className="help-block">{errorMessage}</span> }
      </div>
    )
  }
})

export default SelectField

const settings = ({multiple, prompt}) => {
  let opts = {}
  if(multiple) opts = { ...opts, noneSelectedText: prompt}

  return opts
}

const selectOptions = ({prompt, multiple, options = []}) => {
  let opts = []

  if(prompt && !multiple) opts.push({id: '', name: prompt})
  options.forEach(option => opts.push(option))

  return opts
}
