import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from '../actions'

///////////////////////////////////////////////////////////////////////////////
import t from 'tcomb-form-native';
const Form = t.form.Form;

const Email = t.subtype(t.Str, (email) => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
})

const Phone = t.subtype(t.Num, (phoneNumber) => {
  const reg2 = /^[0-9()-]+$/
  return reg2.test(phoneNumber)
})

const User = t.struct({
  username: t.String,
  email: Email,
  phoneNumber: Phone,
  password: t.String,
  is_owner: t.Boolean
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


class Register extends Component {
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

 handleSubmit = (navigate) => {
    const value = this._form.getValue()
    value ? this.props.registerUser(value, navigate) : null
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Register {"\n"}</Text>
          <Form type={User} ref={c => this._form = c} options={options}/>
          <Text>{"\n"}</Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.handleSubmit(navigate)}
              title="Create Account"
              color="#1A3647"
            />
          </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4592C1',
  },
  header: {
    fontSize: 50,
    color: '#E6E167'
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
  }
})
