import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator, addNavigationHelpers } from 'react-navigation'
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import Login from './components/login'
import Order from './components/order'
import OrderPlaced from './components/order-placed'
import CreateTruck from './components/create-truck'
import SpecificTruck from './components/specific-truck'
import ChangeMenu from './components/specific-truck-menu'
import LoggedIn from './components/logged-in'
import EaterMapView from './components/map'
import LoggedInEater from './components/logged-in-eater'
import EaterTruckMenu from './components/eater-truck-menu'
import Register from './components/register-user'




export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation, // <-- make sure this is where your nav lives (i.e. if your reducer is at state.nav use that instead)
);


export const Navigator = createStackNavigator(
  {
      Login: Login,
      Register: Register,
      Order: Order,
      OrderPlaced: OrderPlaced,
      CreateTruck: CreateTruck,
      SpecificTruck: SpecificTruck,
      ChangeMenu: ChangeMenu,
      LoggedIn: LoggedIn,
      Map: EaterMapView,
      LoggedInEater: LoggedInEater,
      EaterTruckMenu: EaterTruckMenu

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
