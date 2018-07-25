import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

import Navigator from './Navigator'


let store = createStore(rootReducer, applyMiddleware(thunk))


export default class App extends React.Component {


  render() {
    return(
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
