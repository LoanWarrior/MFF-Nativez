import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class LoggedInEater extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>This is the Logged in eater page</Text>
        <Button
          onPress={() => {navigate('Map')}}
          title="Go to the Map page"
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
