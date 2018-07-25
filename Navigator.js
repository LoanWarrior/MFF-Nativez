import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator, addNavigationHelpers } from 'react-navigation'
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import Homepage from './components/homepage'
import Login from './components/login'
import Order from './components/order'
import CreateTruck from './components/create-truck'
import SpecificTruck from './components/specific-truck'
import LoggedIn from './components/logged-in'
import MapView from './components/map'


export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation, // <-- make sure this is where your nav lives (i.e. if your reducer is at state.nav use that instead)
);


export const Navigator = createStackNavigator(
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
  })

const AppWithNavigationState = reduxifyNavigator(Navigator, 'root');

const mapStateToProps = state => ({
  navigation: state.navigation,
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export default connect(mapStateToProps)(Navigator)
