import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {ownersTrucks} from '../actions'

class LoggedIn extends Component {

  async componentDidMount(){
    this.props.ownersTrucks(info.id)
  }


  viewUser = () => {
    console.log(this.props.navigation.state.params.currentUser);
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>This is the Logged in page</Text>
        <Button
          onPress={this.viewUser}
          title="View User"
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

// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser
//   }
// }

const mapDispatchToProps = dispatch => bindActionCreators({
  ownersTrucks
}, dispatch)

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(LoggedIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  }
})
