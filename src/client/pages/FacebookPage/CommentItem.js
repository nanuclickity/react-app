import React from 'react'

const CommentItem = props => {
  return (
    <div className="comment-item">
      <div className="comment-block">
        <div className="comment-user">
          <div className="user-avatar" />
          <div className="user-name">{props.user}</div>
        </div>
        <div className="comment-message">{props.message}</div>
      </div>
      <div className="comment-actions-block">
        <div className="timestamp">{props.updatedAt}</div>
        <div className="comment-action-btn" onClick={props.onLikeClick}>
          Like
        </div>
        <div className="comment-action-btn">Reply</div>
      </div>
    </div>
  )
}

export default CommentItem
