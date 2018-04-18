import React, { Component } from 'react'
import classnames from 'classnames'

import s from './MusicPage.styl'

export default class MusicPage extends Component {
  render() {
    const cx = classnames(s.container)
    return (
      <div className={cx}>
        <div className="header"> Music Page </div>
      </div>
    )
  }
}
