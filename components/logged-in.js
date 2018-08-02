import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { bindActionCreators } from 'redux'
import { ownersTrucks, truckInfo} from '../actions'
import Carousel from 'react-native-snap-carousel'

class LoggedIn extends Component {
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
    this.props.ownersTrucks(this.props.currentUser.id)
  }

  renderItem = ({item, index}) => {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                  <Image style={{marginTop: 40}}source={require('../images/burgerLogo4.png')}/>
                </View>
                <Text style={styles.anyText2}>{item.key}</Text>
                <Text>{"\n"}</Text>
                <View style={styles.buttonContainer2}>
                  <Text  style={styles.anyText} onPress = {() => {this.props.truckInfo(item.id); navigate('SpecificTruck')}}>Go To Truck</Text>
                </View>
            </View>
        );
    }

  render() {
    const { navigate } = this.props.navigation
    const myTrucks = this.props.myTrucks
    let trucksInfo = []
    if (myTrucks[0]) {
      myTrucks.forEach(truck => {
        trucksInfo.push({key: truck.truckName, id: truck.id})
      })
    }
    return (
      <View style={styles.container}>
        <Text style={styles.anyText}>{`Welcome ${this.props.currentUser.username}`}</Text>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Text style={styles.anyText}>My trucks:</Text>
        <Carousel
          data={trucksInfo}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {navigate('CreateTruck')}}
            title="Create Truck"
            color="#1A3647"
          />
        </View>
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

const horizontalMargin = 5;
const slideWidth = 280;

const sliderWidth = 360;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 440;

const mapDispatchToProps = dispatch => bindActionCreators({
  ownersTrucks,
  truckInfo
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
    backgroundColor: '#4592C1',
  },
  truckList: {
    // flex: 0.75,
    width: 300,
    height: 50,
    backgroundColor: 'white',
  },
  anyText: {
    fontSize: 24,
    color: '#1A3647',
  },
  anyText2: {
    fontSize: 24,
    color: '#1A3647',
    marginTop: 18
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
    marginBottom: 6,
    backgroundColor: '#D34C47',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    alignItems: 'center'
  },
  slide: {
    backgroundColor: '#E6E167',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    alignItems: 'center',
    // other styles for the item container
  },
  slideInnerContainer: {
    overflow: 'hidden',
    backgroundColor: '#E6E167',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    width: slideWidth,
    flex: 1,
    alignItems: 'center'
    // other styles for the inner container
  }
})
