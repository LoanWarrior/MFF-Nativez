import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createMenuItem, truckMenu, deleteItem } from '../actions'


import t from 'tcomb-form-native';
const Form = t.form.Form;
const User = t.struct({
  dishName: t.String,
  dishPrice: t.String,
  imageUrl: t.String,
});


class ChangeMenu extends Component {

  async componentDidMount(){
    this.props.truckMenu(this.props.navigation.state.params)
  }

 handleSubmit = (changeView) => {
    const value = this._form.getValue()
    this.props.createTruck(value, changeView)
  }

  render() {
    const { navigate } = this.props.navigation
    const menu = this.props.menu
    let generateMenu = []
    if (menu) {
      for ( let item in menu){
        generateMenu.push({key: menu[item].name, price: menu[item].price, id: menu[item].id})
      }
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={generateMenu}
          renderItem={({item}) =>
          <View>
            <Text> {"\n"}{item.key} {item.price} {item.quantity}        <Text onPress={() => this.props.deleteItem(item.id, this.props.navigation.state.params)}>X</Text></Text>
          </View>
          }/>
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
    orders: state.mainReducer.orders,
    menu: state.mainReducer.menu
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createMenuItem,
  truckMenu,
  deleteItem
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
