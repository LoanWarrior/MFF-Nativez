import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createTruck } from '../actions'

///////////////////////////////////////////////////////////////////////////////
import t from 'tcomb-form-native';
const Form = t.form.Form;
const User = t.struct({
  name: t.String,
  veggieFriendly: t.Boolean,
  imageUrl: t.String,
  takes_orders: t.Boolean
});
///////////////////////////////////////////////////////////////////////////////


class CreateTruck extends Component {
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
   console.log(this.props.currentUser.id)
    const value = this._form.getValue()
    this.props.createTruck(value, changeView, this.props.currentUser.id)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Create a new truck{'\n'}{'\n'}</Text>
          <Form type={User} ref={c => this._form = c}/>
          <Button
            onPress={() => this.handleSubmit(navigate)}
            title="Create Truck"
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
  createTruck
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTruck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  header: {
    fontSize: 30
  }
})
