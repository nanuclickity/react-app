import React, { Component } from 'react'
import classnames from 'classnames'

import s from './PlayerControls.styl'

/**
 * We're going to create a single instance of player for playing sounds
 * For a more advanced use -
 * 1. We can create temporary dynamic instances to do cross-fade between songs
 * 2. They can be used to play notification sounds, so the main song isn't interrupted.
 *    Kind of what happens on your phone, when music is being played, and a call arrives, music volume is dimmed
 */

export default class PlayerControls extends Component {
  render() {
    const cx = classnames(s.container)
    return (
      <div className={cx}>
        <div className="player-inner">Player Controls</div>
      </div>
    )
  }
}
