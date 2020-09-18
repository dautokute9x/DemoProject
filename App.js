

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Modal,
  View,
  Text,
  SafeAreaView,
  Alert
} from 'react-native';
import { useState } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    console.log('<------------------>')

    this.state = { count: 0 }

  }
  increment = () => { this.setState({ count: this.state.count + 1 }) }
  decrement = () => { this.setState({ count: this.state.count - 1 }) }

  render() {
    console.log('render')
    console.log('<------------------>')

    return (
      <SafeAreaView>
        <Text style={{ textAlign: 'center', marginTop: 250, fontSize: 50 }}>{this.state.count}
        </Text>
        <ChildComponent childIncrement={this.increment} childDecrement={this.decrement}> </ChildComponent>
      </SafeAreaView>
    )
  }


  componentDidMount() {
    console.log('component did mount', this.state.count)
    console.log('<------------------>')
  }
  componentDidUpdate() {
    console.log('component did update', this.state.count)
    console.log('<------------------>')

  }
  UNSAFE_componentWillMount() {
    this.setState({ count: 99 })
    console.log('component will mount')
    console.log('<------------------>')

  }
  shouldComponentUpdate() {

    console.log('should component update')
    console.log('<------------------>')

    return true
  }
  UNSAFE_componentWillUpdate() {

    Alert.alert('Updated')

    console.log('component wil update')
    console.log('<------------------>')

  }
}


class ChildComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={{ flexDirection: 'row', marginLeft: 180 }} >

        <Button onPress={this.props.childIncrement} title='+'  >
        </Button>
        <Button onPress={this.props.childDecrement} title='-'></Button>

      </SafeAreaView>
    )
  }

}