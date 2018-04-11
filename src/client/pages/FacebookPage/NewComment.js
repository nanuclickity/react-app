import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class NewComment extends Component {
  state = {
    isLoading: false,
    hasError: false
  }

  static propTypes = {
    onRequestAdd: PropTypes.func.isRequired
  }

  submitOnEnter = e => {
    if (e.which !== 13) {
      return
    }
    const value = this.input.value
    if (value && !this.state.isLoading) {
      this.updateValue()
    }
  }

  updateValue = () => {
    this.setState({ isLoading: true, hasError: false })
    this.props
      .onRequestAdd(this.input.value)
      .then(() => {
        this.input.value = ''
        this.setState({ isLoading: false })
      })
      .catch(err => {
        this.setState({ isLoading: false, hasError: err.message })
      })
  }

  render() {
    const avatarCx = classnames('user-avatar', {
      'rotating-loader': this.state.isLoading
    })

    return (
      <div className="new-comment">
        <div className={avatarCx} />
        <div className="new-comment-container">
          <input
            ref={node => (this.input = node)}
            className="new-comment-input"
            type="text"
            onKeyPress={this.submitOnEnter}
            placeholder="Write a comment..."
          />
        </div>
      </div>
    )
  }
}
