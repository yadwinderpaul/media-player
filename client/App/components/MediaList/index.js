import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react'
import { playNewMedia } from '@/actions'
const IMAGE = 'https://image.flaticon.com/icons/svg/148/148710.svg'

class MediaList extends Component {
  handlePlayNowClick (media) {
    this.props.playNewMedia(media)
  }

  render () {
    return (
      <Card.Group>
        {
          this.props.mediaList.map(media => {
            return <Card key={media.id}>
              <Card.Content>
                <Image floated='right' size='mini' src={IMAGE} />
                <Card.Header>{media.title}</Card.Header>
                <Card.Meta>{media.subTitle}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Button.Group>
                  <Button
                    basic
                    color='green'
                    size='mini'
                    onClick={this.handlePlayNowClick.bind(this, media)}
                  >
                    Play Now
                  </Button>
                  <Button basic color='red' size='mini'>
                    Add To Queue
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>
          })
        }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mediaList: state.mediaList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playNewMedia () {
      dispatch(playNewMedia(...arguments))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaList)
