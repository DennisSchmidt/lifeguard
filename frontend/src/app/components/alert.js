import React, { Component } from 'react'

const Alert = ({
  message,
  type,
  className
}) => (
  <div className={['alert', `alert-${type}`, 'alert-styled-left', 'alert-arrow-left', 'alert-bordered', className].join(' ')}>
    <button type='button' className='close' data-dismiss='alert'>
      <span>×</span><span className="sr-only">Close</span>
    </button>
    {message}
  </div>
)

export default Alert
