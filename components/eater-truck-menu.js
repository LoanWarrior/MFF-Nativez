import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckMenu } from '../actions'

class EaterTruckMenu extends Component {
  state = {
    thing: 'qpwiebfpwie'
  }

  async componentDidMount(){
    this.props.truckMenu(this.props.navigation.state.params)
  }

  changeQuantity(quantity, value){
    if (value){
      if(this.state[quantity]){
        this.state[quantity]++
        this.setState({[quantity]: this.state[quantity]})
      } else {
        this.setState({[quantity]: 1})
      }
      console.log(quantity)
      console.log(this.state)
    } else {
      if(this.state[quantity]){
        if(this.state[quantity] > 0){
          this.state[quantity]--
          this.setState({[quantity]: this.state[quantity]})
        }
      }
      console.log(quantity)
      console.log(this.state)
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
              this.changeQuantity(item.key, true)
              console.log('pressed the button +')}
            }
              > + </Text>
              <Text onPress={() => {
                this.changeQuantity(item.key, false)
                console.log('pressed the button -')}
              }
                > - </Text></Text>
          </View>
          }
          style={styles.truckList}
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Text>These are my ordered items</Text>

        {/* order flatList */}
        <FlatList
          data={[{key: 'taco', id: 1}]}
          renderItem={({item}) => <Text onPress={() => navigate('EaterTruckMenu', item.id)}>{item.key}</Text>}
          style={styles.truckList}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
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
