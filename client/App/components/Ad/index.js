import React, { Component } from 'react'
import { Advertisement, Icon } from 'semantic-ui-react'
import './index.scss'

export default class Ad extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: true
    }
  }

  handleCloseClick () {
    this.setState({
      isVisible: false
    })
  }

  render () {
    return (
      this.state.isVisible
        ? <div className="ad">
          <div className="icon">
            <Icon
              name="window close outline"
              onClick={this.handleCloseClick.bind(this)}
            />
          </div>
          <Advertisement
            centered
            unit='banner'
            test='Advertisement'
          />
        </div>
        : ''
    )
  }
}
