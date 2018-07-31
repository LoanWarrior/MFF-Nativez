import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckMenu } from '../actions'

class EaterTruckMenu extends Component {
  state = {
    total: 0
  }

  async componentDidMount(){
    this.props.truckMenu(this.props.navigation.state.params)
  }

  changeQuantity(quantity, price, value){
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
      if(this.state[quantity]){
        this.state[quantity]++
        this.state.total += price
        this.setState({
          [quantity]: this.state[quantity],
        })
      } else {
        this.setState({
          [quantity]: 1
        })
      }
    } else {
      if(this.state[quantity]){
        if(this.state[quantity] > 0){
          this.state[quantity]--
          this.state.total -= price
          this.setState({[quantity]: this.state[quantity]})
        }
      }
      console.log(quantity)
      console.log(this.state.total)
    }
  }

  render() {
    const { navigate } = this.props.navigation
    const menu = this.props.menu
    let generateMenu = []
    if (menu) {
      for ( let item in menu){
        generateMenu.push({key: menu[item].name, price: menu[item].price, quantity: this.state[menu[item].name]})
      }
    }

    return (
      <View style={styles.container}>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"} MENU</Text>
        <FlatList
          data={generateMenu}
          renderItem={({item}) =>
          <View>
            <Text> {"\n"}{item.key} {item.price} {item.quantity}<Text onPress={() => {
              this.changeQuantity(item.key, item.price, true)
              console.log('pressed the button +')}
            }
              > + </Text>
              <Text onPress={() => {
                this.changeQuantity(item.key, item.price, false)
                console.log('pressed the button -')}
              }
                > - </Text></Text>
          </View>
          }
          style={styles.truckList}
        />
        <Text>{"\n"}{"\n"}Total {this.state.total}{"\n"}{"\n"} </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.mainReducer.menu
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  truckMenu
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
  }
})
