import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MediaPlayer from './components/MediaPlayer'
import Queue from './components/Queue'
import MediaList from './components/MediaList'
import './index.scss'

export default class App extends Component {
  render () {
    return (
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={10}>
            <MediaPlayer />
            <Queue />
          </Grid.Column>
          <Grid.Column width={6}>
            <MediaList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
