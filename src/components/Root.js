import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CApp from "../containers/CApp"

export default class Root extends Component {
  render() {
    return (
      <CApp />
    );
  }
}
