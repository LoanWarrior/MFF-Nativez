import { RootStack } from '../App'
import { NavigationActions } from 'react-navigation'
import { Navigator } from '../Navigator'

import {
LOAD_TRUCK_DATA,
LOG_IN,
GET_OWNERS_TRUCKS
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
       currentUser: 'meg'
     }

   case LOG_IN:
   if(action.payload.isOwner){
     return {
       ...state,
       currentUser: action.payload.id
     }
   } else {
     return {
       ...state,
     }
   }

   case GET_OWNERS_TRUCKS:
    console.log('state here', initialState);
    return{

    }



     // case LOG_IN_FAILED:
     //   return {
     //     ...state,
     //   }
   default:
       return router.getStateForAction(action, state)
 }
}
