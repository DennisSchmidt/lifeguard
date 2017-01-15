import React, { Component } from 'react'
import Redirect from 'react-router/Redirect'
import { graphql } from 'react-apollo'
import _ from 'lodash'

import { displayNameForHOC } from '../../lib/utils'

const simpleForm = (...params) => {
  const mutationName = _.keys(params[0])[0]
  const mutation = _.values(params[0])[0]

  return (WrappedForm) => {
    const hoc = class HOC extends Component {
      static displayName = `HOC(${displayNameForHOC(WrappedForm)})`

      constructor(props) {
        super(props)
        this.state = {canSubmit: false, canRedirect: false}

        this.disableButton = this.disableButton.bind(this)
        this.enableButton = this.enableButton.bind(this)
        this.redirect = this.redirect.bind(this)
      }

      enableButton() {
        this.setState({canSubmit: true})
      }

      disableButton() {
        this.setState({canSubmit: false})
      }

      redirect() {
        this.setState({canRedirect: true})
      }

      render() {
        const formOptions = {
          enableButton: this.enableButton,
          disableButton: this.disableButton,
          onSuccess: this.redirect,
          canSubmit: this.state.canSubmit,
          mutation: mutationName,
          mutate: this.props.mutate
        }

        const redirectParams = {
          pathname: params[1].redirectTo,
          state: {
            flash: { type: 'success', message: params[1].successMessage }
          }
        }

        return (
          this.state.canRedirect
            ? <Redirect to={redirectParams}/>
            : <WrappedForm {...formOptions} />
        )
      }
    }

    return graphql(mutation)(hoc)
  }
}

export default simpleForm
