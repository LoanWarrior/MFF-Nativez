import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckMenu, makeOrder, quantityCount } from '../actions'

class EaterTruckMenu extends Component {

  async componentDidMount(){
    this.props.truckMenu(this.props.navigation.state.params)
  }

  constructor(props) {
    super(props);
    this.state = {
      order: [],
      quantity: 0
    }
  };

  render() {
    const { navigate } = this.props.navigation
    const menu = this.props.menu
    let generateMenu = []
    let truckId = this.props.navigation.state.params
    if (menu) {
      for ( let item in menu){
        generateMenu.push({key: menu[item].name, price: menu[item].price})
      }
    }
    console.log('this.state.quantity', this.state.quantity);
    return (
      <View style={styles.container}>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"} MENU</Text>
        <FlatList
          data={generateMenu}
          renderItem={({item}) =>
          <View>
            <Text>{"\n"}{item.key} {item.price}</Text>
              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                {/* <Text onPress={() => this.setState({quantity: this.state.quantity++})}>+</Text> */}
                <Text onPress={() => this.props.quantityCount(item.key, item.price, false)}>-</Text>
                <Text>{"\n"}quantity: {this.state.quantity}</Text>
              </View>
          </View>
        }/>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Button
        onPress={() => this.props.makeOrder()}
        title="Confirm Order"
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.mainReducer.menu,
    currentUser: state.mainReducer.currentUser,
    quantity: state.mainReducer.quantity
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  truckMenu,
  makeOrder,
  quantityCount
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EaterTruckMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
})
