import { RootStack } from '../App'
import { NavigationActions } from 'react-navigation'
import { Navigator } from '../Navigator'

import {
LOAD_TRUCK_DATA,
LOG_IN,
// LOG_IN_FAILED
} from '../actions'

const router = Navigator.router;
let mainNavAction = router.getActionForPathAndParams('Login');
let initialState = router.getStateForAction(mainNavAction);

export default (state = initialState, action) => {
 switch (action.type) {
   /////////switch cases for reducer/////////////
   case LOAD_TRUCK_DATA:
     return {
       ...state,
     }

   case LOG_IN:
   if(action.payload.isOwner){
     return {
       ...state,
       [state.routes[0].routeName]: 'LoggedIn'
     }
   } else {
     console.log('is eater');
   }
     return {
       ...state,
     }

     // case LOG_IN_FAILED:
     //   return {
     //     ...state,
     //   }
   default:
       return router.getStateForAction(action, state)
 }
}
