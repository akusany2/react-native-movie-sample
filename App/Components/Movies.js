import React, { Component } from 'react'
import {Container, Content, Text} from 'native-base'

import {MovieList} from './UI/MovieList'

export default class Movies extends Component {
  constructor(props) {
    super(props);
  }


  renderList(){
    let list = []
    this.props.data.Search.map((m, i) => {
        list.push(
          <MovieList data={m} key={i} />
        )
    })
    return list
  }

  render(){



    console.log(this.props.data.Search);
    return(
      <Container style={{paddingTop: 60}}>
        <Content>
          {/* <Text>Movies</Text> */}
          {this.renderList()}
        </Content>
      </Container>
    )
  }
}
