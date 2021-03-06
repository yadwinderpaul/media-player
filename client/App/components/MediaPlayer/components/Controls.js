import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withMediaProps } from 'react-media-player'
import { Button, Icon } from 'semantic-ui-react'
import { playNextMedia, playPreviousMedia } from '@/actions'

class Controls extends Component {
  handlePlayPause () {
    if (this.props.currentItemId) {
      this.props.media.playPause()
    }
  }

  handlePreviousClick () {
    this.props.playPreviousMedia()
  }

  handleNextClick () {
    this.props.playNextMedia()
  }

  handleFullScreenClick () {
    if (this.props.currentItemId) {
      this.props.media.fullscreen()
    }
  }

  render () {
    let extraProps = {}
    if (!this.props.currentItemId) {
      extraProps.disabled = true
    }

    return (
      <div>
        <Button.Group>
          <Button
            icon
            {...extraProps}
            onClick={this.handlePreviousClick.bind(this)}
          >
            <Icon name='left arrow' />
          </Button>
          <Button
            icon
            {...extraProps}
            labelPosition='left'
            onClick={this.handlePlayPause.bind(this)}
          >
            <Icon name={this.props.media.isPlaying ? 'pause' : 'play'} />
            {this.props.media.isPlaying ? 'Pause' : 'Play'}
          </Button>
          <Button
            icon
            {...extraProps}
            onClick={this.handleNextClick.bind(this)}
          >
            <Icon name='right arrow' />
          </Button>
        </Button.Group>
        <Button
          icon
          {...extraProps}
          className="ml-10"
          onClick={this.handleFullScreenClick.bind(this)}
        >
          <Icon name='expand' />
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentItemId: state.currentItemId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playNextMedia () {
      dispatch(playNextMedia(...arguments))
    },
    playPreviousMedia () {
      dispatch(playPreviousMedia(...arguments))
    }
  }
}

export default withMediaProps(connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls))
