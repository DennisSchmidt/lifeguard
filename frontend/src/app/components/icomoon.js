import React, { PropTypes } from 'react'
import _ from 'lodash'

const Icomoon = ({
  name,
  title,
  className
}) => (
  <i className={_.compact([`icon-${name}`, className]).join(' ')} title={title} />
)

export default Icomoon

Icomoon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
}
