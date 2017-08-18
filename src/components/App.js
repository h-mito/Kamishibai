import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CHeader from "../containers/CHeader"
import CTop from "../containers/CTop"
import CCounter from "../containers/CCounter"
import About from "./About"


export default class App extends Component {
  render() {
    let {history} = this.props

    let currHis = history[history.length -1]
    let viewContent = null

    switch (currHis) {
      case "/top":
        viewContent = <CTop />
        break;
      case "/counter":
        viewContent = <CCounter />
        break;
      case "/about":
        viewContent = <About />
        break;
      default:

    }

    return (
      <View style={styles.container}>
        <CHeader />
        {viewContent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
