import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MediaPlayer from './components/MediaPlayer'
import Queue from './components/Queue'
import MediaList from './components/MediaList'
import './index.scss'

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="app-header">
          Media Player
        </div>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={11}>
              <MediaPlayer />
              <Queue />
            </Grid.Column>
            <Grid.Column width={5}>
              <MediaList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
