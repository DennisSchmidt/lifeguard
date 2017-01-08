import React, { Component } from 'react'
import Formsy from 'formsy-react'

const TextInput = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    const inputId = buildInputId(this.props.name)

    const { className: wrapperClassName } = this.props.wrapper
    const className = this.showRequired() ? 'required' : this.showError() ? 'has-error' : null;
    const errorMessage = this.getErrorMessage();

    return (
      <div className={[wrapperClassName, className].join(' ')}>
        <label htmlFor={inputId} className="control-label">{this.props.label}</label>
        <input
          type={this.props.type || "text"}
          className="form-control"
          name={this.props.name}
          id={inputId}
          onChange={this.changeValue}
          autoComplete="off"
        />
        <span className="help-block">{errorMessage}</span>
      </div>
    );
  }
})

export default TextInput

const buildInputId = (name) => name.replace(/(\[|_)/g, '-').replace(']', '')
