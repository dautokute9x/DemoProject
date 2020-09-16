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

    ), 2000);
  }
  state = { isShowingText: true }
  render() {
    if (!this.state.isShowingText) {
      return null
    }
    return (
      <Text>{this.props.text}</Text>
    )
  }
}
class App2 extends Component {
  constructor(props) {
    super(props)
    this.state = { message: 'this is state' }
  }
  render() {
    return (
      <Text>
        {this.state.message}
      </Text>
    )
  }
}
class App3 extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "Duy" }
  }
  render() {
    return (
      <View>
        <Text>
          {this.props.name}

        </Text>
        <Text>
          {this.state.text}
        </Text>
      </View>)
  }
}

class App4 extends Component {
  constructor(props){
    super(props)
  }

  updateState = (props) => this.setState({ myState: 'updated' })
  render() {
    return (
      <View>
        <Text onPress={this.updateState}> {this.props.myState} </Text>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '12232' }
  }
  render() {
    return (
      <View style={{ margin: 150 }}>



        <App4 myState={this.state.name} ></App4>

      </View>
    )
  }
}


