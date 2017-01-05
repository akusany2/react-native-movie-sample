import React, { Component } from 'react'
import {Container, Content, Text, Button, InputGroup, Input, Icon, Spinner} from 'native-base'
import {StyleSheet, Dimensions, KeyBoardAvoidingView} from 'react-native'
import {Actions} from 'react-native-router-flux'
// import {AppHeader} from './Header'
import Data from '../Model/Data'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isLoading: false
    }
  }

  handleSubmit(){
    this.setState({
      isLoading: true
    })

    Data.getSearch(this.state.query)
      .then(res => {

        // console.log(res.data);

          Actions.moviesPage({
            data: res.data
          })
          this.setState({isLoading: false})

      })
      .catch(err => {
        console.log(err.response.data);
      })
  }

  handleInputChange(text){
    this.setState({
      query: text
    })

  }

  render(){
    return(
      <Container style={{paddingTop: 60}}>
        <Content>

          <InputGroup>
            <Input onChangeText={this.handleInputChange.bind(this)} placeholder="Search a movie..." />
          </InputGroup>

          <Button
            capitalize
            block
            onPress={this.handleSubmit.bind(this)}
            style={{margin:10, padding:10 }}
            disabled={this.state.isLoading}
          >
            {this.state.isLoading? <Spinner color="white" /> : <Icon name="ios-search" />}
          </Button>

        </Content>
      </Container>
    )
  }
}

let {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  center: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // height: height
  },
})
