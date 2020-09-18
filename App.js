

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
    console.log('constructor')
    this.state = { count: 1 }

  }
  increment = () => { this.setState({ count: this.state.count + 1 }) }
  decrement = () => { this.setState({ count: this.state.count - 1 }) }

  render() {
    console.log('render')
    return (
      <SafeAreaView>
      <Text style={{ textAlign: 'center' }}>{this.state.count}
     </Text>
     <ChildComponent childIncrement= {this.increment} childDecrement={this.decrement}> </ChildComponent>
     </SafeAreaView>
    )
  }
componentDidMount(){
  console.log('component did mount' ,this.state.count)
}

componentDidUpdate(){
  console.log('component did update', this.state.count)
}
static getDerivedStateFromProps(){
  console.log('getDerived state from props')
}

} 

class ChildComponent extends Component{
constructor(props){
  super(props)
}
render(){
  return(
    <SafeAreaView>
   
    <Button onPress={this.props.childIncrement} title='+' >
    </Button>
    <Button onPress={this.props.childDecrement} title='-'></Button>

  </SafeAreaView>
  )
}

}