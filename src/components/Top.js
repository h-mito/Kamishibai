import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class Top extends Component {
  render() {

    let {onGoCounter, onGoAbout} = this.props
    let styles = createStyle()

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! {"\n"}紙芝居App.
        </Text>
        <Text style={styles.instructions}>
          This is Top Page
        </Text>
        <View style={styles.buttons}>
          <Button
            title="カウンター"
            style={styles.btn}
            onPress={()=> onGoCounter()} />
          <Button
            title="About"
            style={styles.btn}
            onPress={()=> onGoAbout()} />
        </View>
      </View>
    );
  }
}

const createStyle = () =>{
  return StyleSheet.create({
    container: {
      flex: 10,
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
    btn: {
      textAlign: 'center',
      marginBottom: 5,
    },
  });
}
