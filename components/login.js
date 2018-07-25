import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadTrucks } from '../actions'

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String
});

class Login extends Component {

  async componentDidMount(){
    this.props.loadTrucks()
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

// const mapStateToProps = state => {
//   return {
//
//   }
// }

const mapDispatchToProps = dispatch => bindActionCreators({
  loadTrucks
}, dispatch)

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(Login);
