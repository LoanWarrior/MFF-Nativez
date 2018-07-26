import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadTrucks, logIn } from '../actions'

///////////////////////////////////////////////////////////////////////////////
import t from 'tcomb-form-native';
const Form = t.form.Form;
const User = t.struct({
  username: t.String,
  password: t.String
});
///////////////////////////////////////////////////////////////////////////////


class Login extends Component {

  async componentDidMount(){
    this.props.loadTrucks()
  }

 handleSubmit = (changeView) => {
    const value = this._form.getValue()
    console.log(value);
    this.props.logIn(value, changeView)
  }

  findMeg = () => {
    console.log(this.props.currentUser);
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Log in</Text>
          <Form type={User} ref={c => this._form = c}/>
          <Button
            onPress={this.findMeg}
            title="find meg"
            color="#841584"
          />
          <Button
            onPress={() => this.handleSubmit(navigate)}
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

const mapStateToProps = state => {
  return {
    currentUser: state.mainReducer.currentUser
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadTrucks,
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
///////////////////////////////////////////////////////////////////////////////
