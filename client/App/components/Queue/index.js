import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, List } from 'semantic-ui-react'
import { setCurrentMedia } from '@/actions'

class Queue extends Component {
  handlePlayNowClick (media) {
    this.props.setCurrentMedia(media)
  }

  render () {
    return (
      <Card fluid>
        <Card.Content header='Current Queue' />
        <Card.Content>
          <List celled>
            {
              this.props.queue.length > 0
                ? this.props.queue.map(media => {
                  let iconName = 'play'
                  if (this.props.currentMedia &&
                    this.props.currentMedia.id === media.id) {
                    iconName = 'circle'
                  }
                  return <List.Item key={media.id}>
                    <List.Icon
                      name={iconName}
                      size='large'
                      verticalAlign='middle'
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
  return {
    queue: state.queue,
    currentMedia: state.currentMedia
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentMedia () {
      dispatch(setCurrentMedia(...arguments))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue)
