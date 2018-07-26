import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { bindActionCreators } from 'redux'
import { ownersTrucks } from '../actions'

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
    return (
      <View style={styles.container}>
        <Text>This is the Logged in page</Text>
        <Button
          onPress={this.viewUserAndTrucks}
          title="View User and Trucks"
          color="#841784"
        />
        <Button
          onPress={() => {navigate('SpecificTruck')}}
          title="Owner: go to the create a truck page"
          color="#841584"
        />
        <Button
          onPress={() => {navigate('Map')}}
          title="Eater: go to the map page"
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
  ownersTrucks
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
  }
})
