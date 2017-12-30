import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * The ToggleButton component.
 */
class ToggleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: props.toggled
    }
    this.changed = this.changed.bind(this)
  }

  render() {
    return (
      <button onClick={this.changed} {...this.props}>
        {this.props.children}
      </button>
    )
  }

  changed(event) {
    const { onChange } = this.props
    const toggled = !this.state.toggled

    if (typeof onChange === 'function') {
      onChange(event, toggled)
    }

    this.setState({ toggled })
  }
}

ToggleButton.propTypes = {
  children: PropTypes.any,
  onChange: PropTypes.func,
  toggled: PropTypes.bool
}

export default ToggleButton
