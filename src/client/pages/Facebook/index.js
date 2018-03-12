import React, { Component } from 'react'

import AppShell from 'containers/AppShell'

import s from './Facebook.styl'

export default class FacebookPage extends Component {
  render() {
    return (
      <AppShell className={s.container}>
        <div className="sample-post">
          <div className="post-comments" />
        </div>
      </AppShell>
    )
  }
}
