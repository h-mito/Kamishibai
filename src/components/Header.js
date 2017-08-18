import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class Header extends Component {
  render() {
    let {history, onGoBack} = this.props

    let styles = createStyle()
    let btn
    if (history.length != 1){
      btn = <Button
        title="＜ 戻る"
        style={styles.btn}
        onPress={()=> onGoBack()} />

    }


    return (
      <View style={styles.container}>
        {btn}
        <Text style={styles.header_text}>
          This is Header
        </Text>
      </View>
    );
  }
}


const createStyle = () => {

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: '#F5FCFF',
      borderBottomColor: "#cccccc",
      borderBottomWidth: 1,
    },
    header_text: {
      flex: 6,
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    button: {
      flex: 1,
      color: '#457899',
    },
  });
}
