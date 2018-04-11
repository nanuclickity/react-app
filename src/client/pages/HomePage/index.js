import React, { Component } from 'react'

import AppShell from 'containers/AppShell'
// import PasswordInput from 'components/ui/InputField/PasswordInput'

import s from './HomePage.styl'

// import HeroSection from './HeroSection'

import TreeView from 'components/ui/TreeView'

export default class HomePage extends Component {
  state = {
    isHeaderFixed: true
  }
  render() {
    const headerProps = {
      fixed: this.state.isHeaderFixed
    }

    return (
      <AppShell className={s.container} headerProps={headerProps}>
        <div className="home-content">
          <div className="container">
            MT Tree View
            <br />
            <br />
            <TreeView />
          </div>
        </div>
      </AppShell>
    )
  }
}
