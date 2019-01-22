import React, { Component } from 'react';
import { Container, Root } from 'native-base';
import Route from './source/scenes/Route'

export default class AppAndroid extends Component {
  render() {
    return (
      <Root>
        <Route></Route>
      </Root>
    );
  }
}
