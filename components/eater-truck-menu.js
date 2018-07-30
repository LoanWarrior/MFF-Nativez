import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckMenu } from '../actions'

class EaterTruckMenu extends Component {

  async componentDidMount(){
    this.props.truckMenu(this.props.navigation.state.params)
  }

  render() {
    const { navigate } = this.props.navigation
    const menu = this.props.menu
    let generateMenu = []
    if (menu) {
      for ( let item in menu){
        generateMenu.push({key: menu[item].name, price: menu[item].price})
      }
    }
    return (
      <View style={styles.container}>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"} MENU</Text>
        <FlatList
          data={generateMenu}
          renderItem={({item}) =>
          <View>
            <Text> {"\n"}{item.key} {item.price}</Text>
          </View>
          }
          style={styles.truckList}
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
