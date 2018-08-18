import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, List, Image } from 'semantic-ui-react'
import { playNewMedia } from '@/actions'

class Queue extends Component {
  handlePlayNowClick (media) {
    this.props.playNewMedia(media)
  }

  render () {
    const IMAGE = 'https://image.flaticon.com/icons/svg/122/122626.svg'

    return (
      <Card fluid>
        <Card.Content header='Current Queue' />
        <Card.Content>
          <List celled>
            {
              this.props.queue.length > 0
                ? this.props.queue.map((media, index) => {
                  return <List.Item key={index}>
                    <Image
                      avatar
                      src={IMAGE}
                      onClick={this.handlePlayNowClick.bind(this, media)}
                    />
                    <List.Content>
                      <List.Header>{media.title}</List.Header>
                      {media.subTitle}
                    </List.Content>
                  </List.Item>
                })
                : <List.Item>
                  <List.Content>
                    <List.Header>Nothing In Queue</List.Header>
                  </List.Content>
                </List.Item>
            }
          </List>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return { queue: state.queue }
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
)(Queue)
