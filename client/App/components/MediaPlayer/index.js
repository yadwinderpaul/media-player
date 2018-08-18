import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import { Media, Player, controls } from 'react-media-player'
import Controls from './components/Controls'
import './index.scss'
const { SeekBar, Volume } = controls
const PLACEHOLDER = 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.stack.imgur.com%2FPtbGQ.png&f=1'

class MediaPlayer extends Component {
  render () {
    const currentQueueItem = this.props.currentQueueItem

    return (
      <Media>
        <Card fluid>
          <Card.Content>
            {
              currentQueueItem && currentQueueItem.src
                ? <div className="player">
                  <Player src={currentQueueItem.src} autoPlay={true} />
                  <SeekBar clasName="seek-bar" />
                </div>
                : <Image src={PLACEHOLDER} />
            }
            <Card.Header>
              {currentQueueItem ? currentQueueItem.title : ''}
            </Card.Header>
            <Card.Meta>
              {currentQueueItem ? currentQueueItem.subTitle : ''}
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
    currentQueueItem: state.queue.find(queueItem => {
      return queueItem.id === state.currentItemId
    })
  }
}

export default connect(
  mapStateToProps
)(MediaPlayer)
