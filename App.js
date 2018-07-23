import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./images/food-truck.jpg')} />
        <Text style={styles.welcome}>Mobile-Food-Finder</Text>
        <Button
          title="Eaters"
          color="black"
        />
        <Button
          title="Owners"
          color="black"
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
  }
});
