import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { truckInfo, completeOrder, updateOnlineStatus } from '../actions'
import  Moment  from 'react-moment'
import 'moment-timezone'
import t from 'tcomb-form-native';
////////////////////// truck toggle ///////////////////
const Form = t.form.Form;

const User = t.struct({
  online: t.Boolean
});

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

  onlineStatus  = () => {
    let value = this._form.getValue()
    let truckId = this.props.currentTruckId
    this.props.updateOnlineStatus(value, truckId)
  }

  render() {
    const { navigate } = this.props.navigation
    const orders = this.props.orders
    let orderInfo = []
    if (orders) {
      for (let order in orders){
        let items = ''
        orders[order].items.forEach(item => {
          items += `${item.name} ...$${item.price}           ${item.quantity} ${"\n"}`
        })
        orderInfo.push({key: order, name: orders[order].name, tel: orders[order].tel, items: items, total: orders[order].total, created_at: orders[order].created_at})
      }
    }
    return (
      <View style={styles.container}>
        <Text>{"\n"}</Text>
        <Form type={User} ref={c => this._form = c} onChange={() => this.onlineStatus()}/>
        <Text style={styles.anyText}> Orders: {orderInfo.length} </Text>
        <Text>{"\n"}{"\n"}</Text>
        {!orderInfo[0] ? <View style={{alignItems: 'center'}}><Text style={styles.anyText}>You currently have no orders</Text><Image style={{marginTop: 40}} source={require('../images/burgerLogo8.png')}/></View> : null}
        <FlatList
          data={orderInfo}
          renderItem={({item}) =>
          <View style={styles.buttonContainer}>
            <Text style={styles.anyText}>{item.key} {item.name}{"\n"} Order placed: <Moment element={Text} fromNow>{item.created_at}</Moment> {"\n"}{item.tel}</Text>

            <Text style={styles.anyText}> {"\n"}{item.items}</Text>
            <Text style={styles.anyText}>Total {item.total}{"\n"}</Text>
            <View style={styles.buttonContainer2}>
              <Button
              onPress={() => this.props.completeOrder(item.key, this.props.currentTruckId)}
              title="Complete Order"
              color="#1A3647"
              />
            </View>
          </View>
          }
          style={styles.truckList}
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <View style={styles.buttonContainer2}>
          <Button
            onPress={() => {navigate('ChangeMenu', this.props.currentTruckId)}}
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
    orders: state.mainReducer.orders,
    currentTruckId: state.mainReducer.currentTruckId
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  truckInfo,
  completeOrder,
  updateOnlineStatus
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
  anyText: {
    fontSize: 24,
    color: '#1A3647'
  },
  buttonContainer: {
    marginBottom: 10,
    backgroundColor: '#E6E167',
    borderRadius: 8,
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
    borderRadius: 8,
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
