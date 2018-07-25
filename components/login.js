import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String
});

export default class Login extends Component {

  async componentDidMount(){
    const response = await fetch('https://mffapi.herokuapp.com/trucks/')
    const trucks = await response.json()
  }

  async handleSubmit(){
    const value = await this._form.getValue()
    console.log(value.username);

    // const userInfo = {
    //   username: value.username,
    //   password: value.password
    // }
    //
    // console.log(userInfo);
    //
    // const response = await fetch('https://mffapi.herokuapp.com/login/', {
    //     method: 'POST',
    //     body: userInfo,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   })
    //   const newComment = await response.json()
    //   console.log(newComment)
  }


  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Log in</Text>
          <Form type={User} ref={c => this._form = c}/>
          <Button
            onPress={this.handleSubmit}
            title="Log in"
            color="#841584"
          />
          <Button
            onPress={() => {navigate('LoggedIn')}}
            title="New User"
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
    width: 300,
    height: 75
  }
})
