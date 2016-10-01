import React, { Component } from 'react'

class Layout extends Component {
  render() {
    return (
      <div>
        <nav>Navigation</nav>
        <main>{this.props.children}</main>
        <footer>Footer</footer>
      </div>
    )
  }
}

export default Layout
