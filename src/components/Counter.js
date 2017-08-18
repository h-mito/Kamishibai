import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class Counter extends Component {
  render() {
    let styles = createStyle()

    let {counter, onIncrement, onDecrement} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is Counter
        </Text>
        <Text style={styles.instructions}>
          紙芝居です。（カウンターUpDown）
        </Text>
        <Button
          title="＋"
          style={styles.btn}
          onPress={()=> onIncrement()} />
        <Button
          title="ー"
          style={styles.btn}
          onPress={()=> onDecrement()} />
        <Text style={styles.counter}>
          カウンターの現在の値 = {counter}
        </Text>
      </View>
    );
  }
}

const createStyle = () => {

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

    },
    counter: {
      fontSize: 20,
    }
  });
}
