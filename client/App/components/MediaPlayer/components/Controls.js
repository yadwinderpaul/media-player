import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withMediaProps } from 'react-media-player'
import { Button, Icon } from 'semantic-ui-react'

class Controls extends Component {
  handlePlayPause () {
    if (this.props.currentMedia) {
      this.props.media.playPause()
    }
  }

  handleNextClick () {}

  handleFullScreenClick () {
    if (this.props.currentMedia) {
      this.props.media.fullscreen()
    }
  }

  render () {
    let extraProps = {}
    if (!this.props.currentMedia) {
      extraProps.disabled = true
    }

    return (
      <div>
        <Button.Group>
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
    currentMedia: state.currentMedia
  }
}

export default withMediaProps(connect(
  mapStateToProps
)(Controls))
