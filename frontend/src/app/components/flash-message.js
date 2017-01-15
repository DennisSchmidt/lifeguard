import React, { Component } from 'react'

import { dig } from '../lib/utils'
import Alert from './alert'

const FlashMessage = ({
  location
}) => {
  const message = dig(location, 'state', 'flash', 'message')
  const type = dig(location, 'state', 'flash', 'type')

  return message && <Alert message={message} type={type} />
}

export default FlashMessage
