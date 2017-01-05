import React, { Component } from 'react'
import {Container, Content, Text, List, ListItem, H2, Button, Icon} from 'native-base'
import {Actions} from 'react-native-router-flux'
import Image from 'react-native-image-progress'
import Progress from 'react-native-progress/CircleSnail'
import {StyleSheet, Dimensions} from 'react-native'

import Web from './UI/Web'


const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 400,
    // position: 'absolute'
  }
})

export default class MovieSingle extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data
  }

  goToImdb(){
    return Actions.web({id: this.data.imdbID})
  }

  render(){

    return(
      <Container style={{paddingTop: 60}}>
        <Content>
          <Image
            style={styles.image}
            source={{uri: this.data.Poster}}
            indicator={Progress}
          />
          <List style={{backgroundColor: 'white'}}>
            <ListItem >
              <H2>{this.data.Title}</H2>
            </ListItem>
            <ListItem><Text>Actors: {this.data.Actors}</Text></ListItem>
            <ListItem><Text>Director: {this.data.Director}</Text></ListItem>
            <ListItem><Text>Duration: {this.data.Runtime}</Text></ListItem>
            <ListItem><Text>Awards: {this.data.Awards}</Text></ListItem>
            <ListItem><Text>Plot: {this.data.Plot}</Text></ListItem>
          </List>

          <Button
            capitalize
            block
            style={{margin:10, padding:10 }}
            onPress={this.goToImdb.bind(this)}
          >
            Visit IMDB
            <Icon name="ios-return-right" />
          </Button>
        </Content>
      </Container>
    )
  }
}
