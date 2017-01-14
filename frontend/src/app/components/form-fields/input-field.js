import React, { Component } from 'react'
import { HOC as FormsyElement} from 'formsy-react'

import Icomoon from '../icomoon'
import { nameToId } from '../../lib/utils'

class InputField extends Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const inputId = nameToId(this.props.name)

    const stateClass = this.props.showRequired() ? 'required has-feedback' : this.props.showError() ? 'has-error' : null
    const errorMessage = this.props.getErrorMessage()

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
        { this.props.showRequired() && <IsRequiredIcon /> }
        { errorMessage && <span className="help-block">{errorMessage}</span> }
      </div>
    );
  }
}

export default FormsyElement(InputField)

const IsRequiredIcon = ({
  name
}) => (
  <div className="form-control-feedback text-warning">
    <Icomoon name="exclamation" />
  </div>
)
