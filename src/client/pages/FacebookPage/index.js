import React, { Component } from 'react'
import { connect } from 'react-redux'

import sample from 'lodash/sample'
import uniq from 'lodash/uniq'
import flatten from 'lodash/flatten'

import s from './FacebookPage.styl'

import AppShell from 'containers/AppShell'
import CommentItem from './CommentItem'

import { actions as fbActions } from 'store/Facebook'

class FacebookPage extends Component {
  componentDidMount = () => {
    if (!this.props.comments.length) {
      this.props.addComment('User1', 'blue')
      this.props.addComment('User2', 'blue')
      this.props.addComment('User3', 'blue')
      this.props.addComment('User4', 'blue')
    }
  }

  addLike = item => {
    const randomuser = 'User' + sample([11, 22, 33, 44, 55, 66, 77, 88, 99])
    this.props.addLike(item.id, randomuser)
  }

  render() {
    const list = this.props.comments || []

    const usersWhoLiked = uniq(flatten(list.map(x => x.likes)))

    const likesMessage =
      usersWhoLiked.length > 1
        ? `${usersWhoLiked[0]} and ${usersWhoLiked.length - 1} more`
        : `${usersWhoLiked[0]}`

    return (
      <AppShell className={s.container}>
        <div className="sample-post">
          <div className="post-image" />
          {likesMessage}
          <div className="post-comments">
            {list.map(item => {
              return (
                <CommentItem
                  user={item.user}
                  message={item.message}
                  updatedAt={item.updatedAt}
                  onLikeClick={() => this.addLike(item)}
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
