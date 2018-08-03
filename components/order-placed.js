import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class OrderPlaced extends Component {
  static navigationOptions = {
    title: 'MFF',
    headerTitleStyle: {
      fontSize: 40
    },
    headerTintColor: '#4592C1',
    headerStyle: {
      backgroundColor: '#1A3647'
    },
  };

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.anyText2}>Order Placed</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.anyText}>Your total is ${this.props.navigation.state.params}</Text>
        <Text>{"\n"}</Text>
        <Image source={require('../images/burgerLogo8.png')}/>
        <Text>{"\n"}</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {navigate('LoggedInEater')}}
            title="Back to all trucks"
            color="#1A3647"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4592C1',
  },
  buttonContainer: {
    marginBottom: 10,
    backgroundColor: '#E6E167',
    borderRadius: 8,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  anyText: {
    fontSize: 24,
    color: '#1A3647'
  },
  anyText2: {
    fontSize: 30,
    color: '#1A3647'
  },
})
