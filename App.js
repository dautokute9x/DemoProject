/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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



const Hung = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View >
      <Text style={{ marginLeft: 100 }}> I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        color="#f194ff"
        disabled={!isHungry}
        title={isHungry ? 'I am hungry' : 'thank you'}
      ></Button>
    </View>
  )
}

const App = () => {
  const [modalVisible, setModalVisble] = useState(false);

  return (
    <SafeAreaView>
 
      <Hung name='Hung'></Hung>

      <Button
        onPress={() => {
          setModalVisble(true)
        }}
        title={'Click me'}
      ></Button>
      <Modal animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal closed");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ margin: 100 }}>Hello</Text>
            <TouchableOpacity

              onPress={() => {
                setModalVisble(!modalVisible);
              }}

            >
              <Text style={styles.textStyle}>Hide </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>

  )
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  modalView: {

    margin: 20,
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  }
})

export default App;
