import React, { Component } from 'react'
import {WebView} from 'react-native'

export default class Web extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let uri = `http://www.imdb.com/title/${this.props.id}`
    return(
       <WebView
         source={{uri}}
         style={{paddingTop: 60}}
       />
    )
  }
}
