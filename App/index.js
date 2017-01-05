
import React, { Component } from 'react';
import {
  Router,
  Scene
} from 'react-native-router-flux';

import Home from './Components/Home'
import Movies from './Components/Movies'
import moviesSingle from './Components/MovieSingle'
import Web from './Components/UI/Web'

export default class movieApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="homePage" title="Movie Finder" component={Home} initial={true} />
          <Scene key="moviesPage" title="Search Result" component={Movies} />
          <Scene key="moviesSingle" title="Movie" component={moviesSingle} />
          <Scene key="web" title="Movie Web" component={Web} />
        </Scene>
      </Router>
    );
  }
}
