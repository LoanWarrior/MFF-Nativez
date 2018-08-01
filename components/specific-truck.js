import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckInfo, completeOrder } from '../actions'
import  Moment  from 'react-moment'
import 'moment-timezone'

class SpecificTruck extends Component {
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
          <View style={styles.buttonContainer}>
            <Text>{item.key} {item.name} {"\n"} Order Placed: <Moment element={Text} fromNow>{item.created_at}</Moment> {"\n"}{item.tel}</Text>

            <Text> {"\n"}{item.items}</Text>
            <Text>Total {item.total}{"\n"}</Text>
            <View style={styles.buttonContainer2}>
              <Button
              onPress={() => this.props.completeOrder(item.key, this.props.navigation.state.params)}
              title="Complete Order"
              color="#1A3647"
              />
            </View>
          </View>
          }
          style={styles.truckList}
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {navigate('ChangeMenu', this.props.navigation.state.params)}}
            title="Change Menu"
            color="#1A3647"
          />
        </View>
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
    backgroundColor: '#4592C1',
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
    marginBottom: 10,
    backgroundColor: '#D34C47',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})
