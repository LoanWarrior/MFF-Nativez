import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { bindActionCreators } from 'redux'
import { ownersTrucks, linkToTruck } from '../actions'

class LoggedIn extends Component {

//////////////////loading trucks based on user

  async componentDidMount(){
    this.props.ownersTrucks(this.props.currentUser.id)
  }


  viewUserAndTrucks = () => {
    console.log('current user', this.props.currentUser);

    ///map over trucks to generate info cards that will link to seperate page


    console.log('current trucks', this.props.trucks);
  }

  render() {
    const { navigate } = this.props.navigation
    const ownerTrucks = this.props.trucks
    let trucks = []
    if (ownerTrucks[0]) {
      ownerTrucks.map(truck => {
        trucks.push({key: truck.name, id: truck.id} )
      })
    }

    return (
      <View style={styles.container}>
        <Text>Welcome Owner Name</Text>
        <Text>My trucks:</Text>
        <Button
          onPress={this.viewUserAndTrucks}
          title="View User and Trucks"
          color="#841784"
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <FlatList
          data={trucks}
          renderItem={({item}) => <Text onPress={() => linkToTruck(item.id, navigate)}>{item.key}</Text>}
          style={styles.truckList}
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
    trucks: state.mainReducer.trucks
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
