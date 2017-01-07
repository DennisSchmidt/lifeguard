import React, { Component } from 'react'

class RippleEffect extends Component {
  componentDidMount () {
    $(this.refs[0]).ripple({dragging: false, adaptPos: false, scaleMode: false})
  }

  render () {
    const childWithRefs = React.Children.map(
      this.props.children,
      (element, idx) => { return React.cloneElement(element, { ref: idx }) }
    )

    return childWithRefs[0]
  }
}

export default RippleEffect
