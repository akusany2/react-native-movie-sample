import React, { Component } from 'react'
import {Card, CardItem, Thumbnail, Text, Button, Spinner} from 'native-base'
import Image from 'react-native-image-progress'
import Progress from 'react-native-progress/CircleSnail';
import {TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'

import Data from '../../Model/Data'

export class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  handleClick(){

    // passing imdbID data from props to next page
    Data.getimdb(this.props.data.imdbID)
      .then(data => {
        console.log(data);
        setTimeout(() => {
          Actions.moviesSingle({data: data.data})
        }, 500)
      })
      .catch(err => {
        console.log(err.response.data);
      })
  }

  render(){
    return(

      <Card style={{flex: 0}} >

        <CardItem button onPress={this.handleClick.bind(this)}>
          <Text>{this.props.data.Title}</Text>
          <Text note>{this.props.data.Year}</Text>
        </CardItem>
        <CardItem cardBody button onPress={this.handleClick.bind(this)}>
          <Image
            style={{resizeMode: 'contain', height: 400}}
            source={{uri: this.props.data.Poster}}
            indicator={Progress}
          />
        </CardItem>

      </Card>
    )
  }
}
