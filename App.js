import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homepage from './components/homepage'
import Login from './components/login'
import Order from './components/order'
import CreateTruck from './components/create-truck'
import SpecificTruck from './components/specific-truck'
import LoggedIn from './components/logged-in'
import MapView from './components/map'
import rootReducer from './reducers/index'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

let store = createStore(rootReducer, applyMiddleware(thunk))

const RootStack = createStackNavigator(
  {
      Home: Homepage,
      Login: Login,
      Order: Order,
      CreateTruck: CreateTruck,
      SpecificTruck: SpecificTruck,
      LoggedIn: LoggedIn,
      Map: MapView,

  },
  {
    initialRouteName: 'Login',
  }
);



export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
