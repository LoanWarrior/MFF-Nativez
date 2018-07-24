import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
  Owner: t.Boolean
});


export default class Login extends Component {

  handleSubmit = () => {
    const value = this._form.getValue()
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Log in!!!</Text>
          <Form type={User} ref={c => this._form = c} />
          <Button
            onPress={this.handleSubmit}
            title="Log in"
            color="#841584"
          />
          <Button
            onPress={() => {navigate('LoggedIn')}}
            title="Sign up"
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
  },
  header: {
    fontSize: 50
  },
  inputs: {
    width: 100
  }
})
