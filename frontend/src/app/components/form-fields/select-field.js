import React, { Component } from 'react'
import { HOC as FormsyElement} from 'formsy-react'

import { nameToId } from '../../lib/utils'

class SelectField extends Component {
  constructor(props) {
    super(props)

    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  componentDidMount() {
    $(this.refs.selectField).selectpicker()
  }

  componentDidUpdate() {
    $(this.refs.selectField).selectpicker('refresh')
  }

  render () {
    const inputId = nameToId(this.props.name)

    const stateClass = this.props.showRequired() ? 'required' : this.props.showError() ? 'has-error' : null
    const errorMessage = this.props.getErrorMessage()
    const options = this.props.options || []

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
          title={this.props.prompt}
        >
          {options.map(
            ({id, name}) => <option key={id} value={id}>{name}</option>
          )}
        </select>
        { errorMessage && <span className="help-block">{errorMessage}</span> }
      </div>
    )
  }
}

export default FormsyElement(SelectField)
