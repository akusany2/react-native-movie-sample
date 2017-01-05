import React, { Component } from 'react'
import {
  Header,
  Button,
  Icon,
  Title
} from 'native-base'

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Header>
        <Button transparent>
          <Icon name='ios-arrow-back' />
        </Button>

        <Title>Header</Title>

        <Button transparent>
          <Icon name='ios-menu' />
        </Button>
      </Header>
    )
  }
}
