import React, { Component } from 'react'

import moment from 'moment'

export default class CommentItem extends Component {
  state = {
    isLoading: false
  }

  onLikeClick = () => {
    if (this.state.isLoading) {
      return
    }

    const { id, user } = this.props
    this.setState({ isLoading: true })
    this.props
      .onLikeClick(id, user)
      .then(() => {
        this.setState({ isLoading: false })
      })
      .catch(err => {
        this.setState({ isLoading: false })
      })
  }

  render() {
    const { user, message, likesCount, updatedAt } = this.props

    const commentLikes = this.state.isLoading ? (
      <div className="comment-likes rotating-loader" />
    ) : (
      <div className="comment-likes">
        <i className="material-icons">thumb_up</i> &nbsp; {likesCount}
      </div>
    )

    return (
      <div className="comment-item">
        <div className="comment-block">
          <div className="comment-user">
            <div className="user-avatar" />
            <div className="user-name">{user}</div>
          </div>
          <div className="comment-message">{message}</div>
          {commentLikes}
        </div>
        <div className="comment-actions-block">
          <div className="comment-action-btn" onClick={this.onLikeClick}>
            Like
          </div>
          <div className="comment-action-btn">Reply</div>
          <div className="timestamp">{moment(updatedAt).fromNow()}</div>
        </div>
      </div>
    )
  }
}
