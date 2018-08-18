import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

export default class MediaList extends Component {
  render () {
    const items = [
      {
        childKey: 0,
        image: 'https://react.semantic-ui.com/images/wireframe/image.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra'
      },
      {
        childKey: 1,
        image: 'https://react.semantic-ui.com/images/wireframe/image.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra'
      }
    ]

    return (
      <Item.Group items={items} />
    )
  }
}
