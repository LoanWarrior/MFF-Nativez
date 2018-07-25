import {
LOAD_TRUCK_DATA,
LOG_IN,
GET_OWNERS_TRUCKS
// LOG_IN_FAILED
} from '../actions'

let initialState = {
    currentUser: ''
}

export default (state = initialState, action) => {
 switch (action.type) {
   /////////switch cases for reducer/////////////
   case LOAD_TRUCK_DATA:
     return  state = {
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
       return state
 }
}
