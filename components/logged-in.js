import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { bindActionCreators } from 'redux'
import { ownersTrucks, linkToTruck } from '../actions'

class LoggedIn extends Component {

  async componentDidMount(){
    this.props.ownersTrucks(this.props.currentUser.id)
  }

  render() {
    const { navigate } = this.props.navigation
    const myTrucks = this.props.myTrucks
    let trucksInfo = []
    if (myTrucks[0]) {
      myTrucks.forEach(truck => {
        // console.log(truck);
        trucksInfo.push({key: truck.truckName, id: truck.id})
      })
    }

    return (
      <View style={styles.container}>
        <Text>Welcome Owner Name</Text>
        <Text>My trucks:</Text>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <FlatList
          data={trucksInfo}
          renderItem={({item}) => <Text onPress={() => linkToTruck(item.id, navigate)}>{item.key}</Text>}
          style={styles.truckList}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Button
          onPress={() => {navigate('CreateTruck')}}
          title="Create Truck"
          color="#841584"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.mainReducer.currentUser,
    myTrucks: state.mainReducer.trucks
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ownersTrucks,
  linkToTruck
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  truckList: {
    // flex: 0.75,
    width: 300,
    height: 50,
    backgroundColor: 'white',
  }
})
