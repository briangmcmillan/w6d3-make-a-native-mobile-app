/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native';

export default class LectureApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      modalVisible: false
    };
  }
  setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  render() {
    let pic = {
      uri: 'https://source.unsplash.com/random'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Welcome!
        </Text>
        <Text style={styles.instructions}>
        Check out my Hacked together components!
        </Text>
        <Image source={pic} style={{borderRadius: 80, width: 150, height: 150}}/>
        <TextInput selectionColor= 'white'
        style={{textAlign: 'center', height: 30, borderColor: 'white', borderWidth: .5, color: '#FFFFFF',}}
        placeholder="What are your thoughts..."
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={styles.instructions}>My Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#658E9C',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LectureApp', () => LectureApp);
