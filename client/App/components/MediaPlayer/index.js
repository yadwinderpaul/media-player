import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { Media, Player, controls } from 'react-media-player'
import Controls from './components/Controls'
import './index.scss'
const { SeekBar, Volume } = controls

export default class MediaPlayer extends Component {
  render () {
    const source = 'https://perform-content.airtel.tv//010718-EN-PERFORM-CROvDEN-5THINGS-RV-2_1530486931115_1726.mp4'
    return (
      <Media>
        <Card fluid>
          <Card.Content>
            <div className="player">
              <Player src={source} />
              <SeekBar clasName="seek-bar" />
            </div>
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="controls-container">
              <Controls />
              <div className="volume-container">
                <div className="text">Volume</div>
                <div><Volume /></div>
              </div>
            </div>
          </Card.Content>
        </Card>
      </Media>
    )
  }
}
