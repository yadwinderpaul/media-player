import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Player from './components/Player'
import Playlist from './components/Playlist'
import MediaList from './components/MediaList'
import './index.scss'

export default class App extends Component {
  render () {
    return (
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={10}>
            <Player />
            <Playlist />
          </Grid.Column>
          <Grid.Column width={6}>
            <MediaList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
