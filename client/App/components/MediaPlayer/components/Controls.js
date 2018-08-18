import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import { Button, Icon } from 'semantic-ui-react'

class Controls extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  handlePlayPause () {
    this.props.media.playPause()
  }

  handleNextClick () {}

  render () {
    return (
      <Button.Group>
        <Button
          icon
          labelPosition='left'
          onClick={this.handlePlayPause.bind(this)}
        >
          <Icon name={this.props.media.isPlaying ? 'pause' : 'play'} />
          {this.props.media.isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button
          icon
          onClick={this.handleNextClick.bind(this)}
        >
          <Icon name='right arrow' />
        </Button>
      </Button.Group>
    )
  }
}

export default withMediaProps(Controls)
