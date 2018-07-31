import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createMenuItem from '../actions'


import t from 'tcomb-form-native';
const Form = t.form.Form;
const User = t.struct({
  dishName: t.String,
  dishPrice: t.String,
  imageUrl: t.String,
});


class ChangeMenu extends Component {

 handleSubmit = (changeView) => {
    const value = this._form.getValue()
    this.props.createTruck(value, changeView)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add a new Dish{'\n'}{'\n'}</Text>
          <Form type={User} ref={c => this._form = c}/>
          <Button
            onPress={() => this.handleSubmit(navigate)}
            title="Add Dish"
            color="#841584"
          />
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    orders: state.mainReducer.orders
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createMenuItem
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  }
})
