import React, { Component } from 'react'
import { HOC as FormsyElement} from 'formsy-react'

import { nameToId } from '../../lib/utils'

class SelectField extends Component {
  constructor(props) {
    super(props)

    this.changeValue = this.changeValue.bind(this)
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
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

  shouldComponentUpdate(nextProps) {
    if(this.props.options == undefined && nextProps.options == undefined) return false
    return true
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
          title={this.props.multiple ? this.props.prompt : null}
        >
          {/*This is a workaround until bootstrap-select handles 'refresh' and :title properly for none multiple selects*/}
          {!this.props.multiple && <option style={{display: 'none'}}>{this.props.prompt}</option>}
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
