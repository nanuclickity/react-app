import React, { Component } from 'react'
import { connect } from 'react-redux'

import sortBy from 'lodash/sortBy'
import uniq from 'lodash/uniq'
import flatten from 'lodash/flatten'

import s from './FacebookPage.styl'

import AppShell from 'containers/AppShell'
import CommentItem from './CommentItem'
import NewComment from './NewComment'

import { actions as fbActions } from 'store/Facebook'

class FacebookPage extends Component {
  state = {
    sortKey: 'updatedAt'
  }

  getCommentsList = () => {
    var list = this.props.comments || []
    list = sortBy(list, this.state.sortKey).reverse()
    return list
  }

  render() {
    const list = this.getCommentsList()

    const usersWhoLiked = uniq(flatten(list.map(x => x.likes)))

    const likesMessage = usersWhoLiked.length
      ? usersWhoLiked.length > 1
        ? `${usersWhoLiked[0]} and ${usersWhoLiked.length -
            1} others likes this`
        : `${usersWhoLiked[0]} likes this`
      : ''

    return (
      <AppShell className={s.container}>
        <div className="sample-post">
          <div className="post-image" />
          {likesMessage && <div className="post-stats">{likesMessage}</div>}
          <div className="post-comments">
            <NewComment onRequestAdd={this.props.addComment} />
            {list.map(item => {
              return (
                <CommentItem
                  id={item.id}
                  user={item.user}
                  message={item.message}
                  likesCount={item.likes.length}
                  updatedAt={item.updatedAt}
                  onLikeClick={this.props.addLike}
                  key={item.id}
                />
              )
            })}
          </div>
        </div>
      </AppShell>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.Facebook.isLoading,
  hasError: state.Facebook.hasError,
  comments: state.Facebook.comments
})

const mapDispatchToProps = dispatch => ({
  addComment(message) {
    return dispatch(fbActions.addComment(message))
  },
  addLike(commentId, fromuser) {
    return dispatch(fbActions.addLike(commentId, fromuser))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookPage)
