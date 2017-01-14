import React, { PropTypes } from 'react'
import _ from 'lodash'

const Icomoon = ({
  name,
  title,
  className,
  style
}) => (
  <i className={_.compact([`icon-${name}`, className]).join(' ')} title={title} style={style}/>
)

export default Icomoon

Icomoon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
}
