import React from 'react'
import PropTypes from 'prop-types'

/**
 * The Elemetal <Link /> component.
 */
const Link = props => {
  const newProps = {}

  // When using target add rel="noopener noreferrer" to avoid exploitation of the window.opener API.
  if (typeof props.target === 'string') {
    newProps.rel = 'noopener noreferrer'
  }

  // When using onClick and preventDefault delegate to proxy function that will auto prevent default.
  if (typeof props.onClick === 'function' && props.preventDefault) {
    newProps.onClick = event => preventOnClickDefault(event, props.onClick)
  }

  return <a {...{ ...props, ...newProps }}>{props.children}</a>
}

/**
 * Utilities.
 */

function preventOnClickDefault(event, callback) {
  event.preventDefault()
  callback.call(null, event)
}

Link.propTypes = {
  children: PropTypes.element,
  href: PropTypes.string,
  target: PropTypes.string,
  preventDefault: PropTypes.bool,
  onClick: PropTypes.func
}

export default Link
