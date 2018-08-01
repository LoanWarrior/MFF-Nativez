import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, List, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckMenu, placeOrder } from '../actions'

class EaterTruckMenu extends Component {
  state = {
    total: 0
  }
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

  async componentDidMount(){
    this.props.truckMenu(this.props.navigation.state.params)
  }

  changeQuantity(name, price, value){
    if (value){
      if(this.state.total === 0){
        this.setState({
          total: price
        })
      } else {
        this.state.total += price
        this.setState({
          total: this.state.total
        })
      }
      if(this.state[name]){
        this.state[name]++
        this.state.total += price
        this.setState({
          [name]: this.state[name],
        })
      } else {
        this.setState({
          [name]: 1
        })
      }
    } else {
      if(this.state[name]){
        if(this.state[name] > 0){
          this.state[name]--
          this.state.total -= price
          this.setState({[name]: this.state[name]})
        }
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation
    const menu = this.props.menu
    let generateMenu = []
    let postItems = []
    if (menu) {
      for ( let item in menu){
        generateMenu.push({key: menu[item].name, price: menu[item].price, quantity: this.state[menu[item].name]})
        if(this.state[menu[item].name] !== undefined && this.state[menu[item].name] !== 0){
          postItems.push({item_id: menu[item].id, quantity: this.state[menu[item].name]})
        }
      }
    }
    let newOrder = {
      truck_id: this.props.navigation.state.params,
      eater_id: this.props.currentUser.id,
    }
    let items = []
    return (
      <View style={styles.container}>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Text style={styles.header}>MENU</Text>
        <FlatList
          data={generateMenu}
          renderItem={({item}) =>
          <View style={styles.buttonContainer2}>
            <View>
              <Text style={styles.anyText} > {item.key}{"\n"}price ${item.price}        Qty:{item.quantity} <Text style={styles.anyText} onPress={() =>
                this.changeQuantity(item.key, item.price, true)}
                > + </Text>

              <Text style={styles.anyText} onPress={() =>
                this.changeQuantity(item.key, item.price, false)}
                > - {"\n"}</Text></Text>
            </View>
          </View>
          }/>
        <Text style={styles.anyText} >Total {this.state.total}{"\n"}{"\n"} </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {this.props.placeOrder(newOrder, postItems, this.state.total, navigate)}}
            title="Place Order"
            color="#1A3647"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.mainReducer.menu,
    currentUser: state.mainReducer.currentUser,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  truckMenu,
  placeOrder
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
    backgroundColor: '#4592C1',
  },
  anyText: {
    fontSize: 24,
    color: '#1A3647'
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
  },
  buttonContainer2: {
    backgroundColor: '#E6E167',
    padding: 2
  },
  header: {
    fontSize: 30,
    color: '#E6E167'
  }
})
