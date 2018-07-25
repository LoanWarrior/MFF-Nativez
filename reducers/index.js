import { combineReducers } from 'redux'
import mainReducer from './mainReducer'
import navReducer from './navReducer'

export default combineReducers({
  mainReducer,
  navReducer
})
