import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, List } from 'semantic-ui-react'
import { setCurrentItemId } from '@/actions'

class Queue extends Component {
  handlePlayNowClick (queueItem) {
    this.props.setCurrentItemId(queueItem.id)
  }

  render () {
    return (
      <Card fluid>
        <Card.Content header='Current Queue' />
        <Card.Content>
          <List celled>
            {
              this.props.queue.length > 0
                ? this.props.queue.map(queueItem => {
                  let iconName = 'play'
                  if (this.props.currentItemId === queueItem.id) {
                    iconName = 'circle'
                  }
                  return <List.Item key={queueItem.id}>
                    <List.Icon
                      name={iconName}
                      size='large'
                      verticalAlign='middle'
                      onClick={this.handlePlayNowClick.bind(this, queueItem)}
                    />
                    <List.Content>
                      <List.Header>{queueItem.title}</List.Header>
                      {queueItem.subTitle}
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
    currentItemId: state.currentItemId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentItemId () {
      dispatch(setCurrentItemId(...arguments))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue)
