import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { bindActionCreators } from 'redux'
import { getOpenTrucks } from '../actions'

class LoggedInEater extends Component {

  async componentDidMount(){
    this.props.getOpenTrucks()
  }

  render() {
    const { navigate } = this.props.navigation
    const openTrucks = this.props.openTrucks
    let allOpenTrucks = []
    if (openTrucks[0]) {
      openTrucks.forEach(truck => {
        allOpenTrucks.push({key: truck.truckName, id: truck.id})
      })
    }
    return (
      <View style={styles.container}>
        <Text>This is the Logged in eater page</Text>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Text>This is the Menu</Text>
        <FlatList
          data={allOpenTrucks}
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
    openTrucks: state.mainReducer.openTrucks
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getOpenTrucks
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInEater);

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
