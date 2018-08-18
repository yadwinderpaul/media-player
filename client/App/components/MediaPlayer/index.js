import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import { Media, Player, controls } from 'react-media-player'
import Controls from './components/Controls'
import './index.scss'
const { SeekBar, Volume } = controls

class MediaPlayer extends Component {
  render () {
    const currentMedia = this.props.currentMedia
    const PLACEHOLDER = 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.stack.imgur.com%2FPtbGQ.png&f=1'

    return (
      <Media>
        <Card fluid>
          <Card.Content>
            {
              currentMedia && currentMedia.src
                ? <div className="player">
                  <Player src={currentMedia.src} autoPlay={true} />
                  <SeekBar clasName="seek-bar" />
                </div>
                : <Image src={PLACEHOLDER} />
            }
            <Card.Header>
              {currentMedia ? currentMedia.title : ''}
            </Card.Header>
            <Card.Meta>
              {currentMedia ? currentMedia.subTitle : ''}
            </Card.Meta>
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

const mapStateToProps = (state) => {
  return {
    currentMedia: state.currentMedia
  }
}

export default connect(
  mapStateToProps
)(MediaPlayer)
