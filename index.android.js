/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {createStore} from "redux"
import {Provider} from "react-redux"

import Root from "./src/components/Root"
import rootReducer from "./src/reducers/root"

export default class Kamishibai extends Component {
  render() {
    let store = createStore(rootReducer)

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('Kamishibai', () => Kamishibai);
