import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Login extends Component {

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Form to sign in or sign up here</Text>
        <Button
          onPress={() => {navigate('LoggedIn')}}
          title="Go to the logged in page"
          color="#841584"
        />
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
  }
})
