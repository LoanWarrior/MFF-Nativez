import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './login'

export default class App extends Component {

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/food-truck.jpg')} />
        <Text style={styles.welcome}>Mobile-Food-Finder</Text>
        <TouchableOpacity onPress={() => {navigate('Login')}} style={styles.buttons}>
          <Text style={{ fontSize: 35 }}>Eaters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigate('Login')}} style={styles.buttons}>
          <Text style={{ fontSize: 35 }}>Owners</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },
  buttons: {
    backgroundColor: '#D34C47',
    width: 180,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 50,
  }
});
