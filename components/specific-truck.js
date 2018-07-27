import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckInfo } from '../actions'

class SpecificTruck extends Component {

  state = {

  }

  async componentDidMount(){
    this.props.truckInfo(this.props.navigation.state.params)
  }

  viewTruck(){
    console.log('view truck',this.props.orders);
  }



  render() {
    const { navigate } = this.props.navigation
    const orders = this.props.orders
    let orderInfo = []
    if (orders) {
      for ( let order in orders){
        let items = ''
        let total = 0
        console.log('almost there', orders[order].items);
        orders[order].items.forEach(item => {
          items += `${item.name} ${item.price} ${"\n"}`
          total += item.price
        })
        // items = `${orders[order].items.toString()}`
        orderInfo.push({key: order, name: orders[order].name, tel: orders[order].tel, items: items, total: total})
      }
    }
    return (
      <View style={styles.container}>
        <Text>{}</Text>
        <Button
          onPress={() => this.viewTruck()}
          title="viewTruck"
          color="#841584"
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <FlatList
          data={orderInfo}
          renderItem={({item}) =>
          <View>
            <Text>{item.key} {item.name} {"\n"}{item.tel}</Text>
            <Text> {"\n"}{item.items}</Text>
            <Text>Total {item.total}{"\n"}</Text>
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
    orders: state.mainReducer.orders
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  truckInfo
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecificTruck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  }
})
