import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckInfo, completeOrder } from '../actions'
import  Moment  from 'react-moment'
import 'moment-timezone'

class SpecificTruck extends Component {

  async componentDidMount(){
    this.props.truckInfo(this.props.navigation.state.params)
  }

  render() {
    const { navigate } = this.props.navigation
    const orders = this.props.orders
    let orderInfo = []
    if (orders) {
      for ( let order in orders){
        let items = ''
        let total = 0
        orders[order].items.forEach(item => {
          items += `${item.name} ${item.price} ${"\n"}`
          total += item.price
        })
        orderInfo.push({key: order, name: orders[order].name, tel: orders[order].tel, items: items, total: total, created_at: orders[order].created_at})
      }
    }
    return (
      <View style={styles.container}>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <FlatList
          data={orderInfo}
          renderItem={({item}) =>
          <View>
            <Text>{item.key} {item.name} {"\n"} Order Placed: <Moment element={Text} fromNow>{item.created_at}</Moment> {"\n"}{item.tel}</Text>

            <Text> {"\n"}{item.items}</Text>
            <Text>Total {item.total}{"\n"}</Text>
            <Button
            onPress={() => this.props.completeOrder(item.key)}
            title="Complete Order"
            color="#841584"
            />
          </View>
          }
          style={styles.truckList}
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Button
          onPress={() => {navigate('ChangeMenu', this.props.navigation.state.params)}}
          title="Change Menu"
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
  truckInfo,
  completeOrder
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
