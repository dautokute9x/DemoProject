

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Modal,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { useState } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }

  }
  increment = () => { this.setState({ count: this.state.count + 1 }) }
  decrement = () => { this.setState({ count: this.state.count - 1 }) }

  render() {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: 'center' }}>{this.state.count}
        </Text>
        <Button onPress={this.increment} title='+'></Button>
        <Button onPress={this.increment} title='-'></Button>

      </SafeAreaView>
    )
  }
}