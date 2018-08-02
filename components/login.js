import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, StatusBar} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn } from '../actions'

///////////////////////////////////////////////////////////////////////////////
import t from 'tcomb-form-native';
const Form = t.form.Form;
const User = t.struct({
  username: t.String,
  password: t.String
})

let options = {
  fields: {
    username: {
      placeholder: 'Username'
    },
    password: {
      password: true,
      secureTextEntry: true,
      placeholder: 'Password'
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

class Login extends Component {
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

 handleSubmit = (changeView) => {
    const value = this._form.getValue()
    value ? this.props.logIn(value, changeView) : null
  }

  render() {

    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle= "light-content"
          hidden = {false}
        />

        {/* <Image source={require('../images/food-truck.jpg')}/> */}
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Text style={styles.header}>Log in</Text>
        <Text>{"\n"}</Text>
          <Form type={User} ref={c => this._form = c} options={options}/>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.handleSubmit(navigate)}
              title="Log in"
              color="#1A3647"
            />
          </View>
          <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
          <Text style={styles.anyText}>Don't have an account?{"\n"}</Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {navigate('Register')}}
              title="Create Account"
              color="#1A3647"
            />
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.mainReducer.currentUser
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  logIn
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4592C1'
  },
  header: {
    fontSize: 50,
    color: '#E6E167'
  },
  anyText: {
    fontSize: 16,
    color: '#E6E167'
  },
  buttonContainer: {
    marginBottom: 10,
    backgroundColor: '#E6E167',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})
///////////////////////////////////////////////////////////////////////////////
