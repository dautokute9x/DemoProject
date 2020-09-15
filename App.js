/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Modal,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  ScrollView,

} from 'react-native';
import { useState } from 'react';



class App1 extends Component {
  componentDidMount() {
    setInterval(() => (
      this.setState(previousState => ({ isShowingText: !previousState.isShowingText }))

    ), 1000);
  }
  state = {isShowingText:true}
  render() {
    if(!this.state.isShowingText){
      return null
    }
    return (
      <Text>{this.props.text}</Text>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <View style={{ margin: 150 }}>
        {/* <Text>{this.state.message}</Text> */}
        <App1 text='Hung'></App1>
      </View>
    )
  }
} 


