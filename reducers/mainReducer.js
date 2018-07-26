import {
LOAD_TRUCK_DATA,
LOG_IN,
GET_OWNERS_TRUCKS,
// LOG_IN_FAILED
} from '../actions'

let initialState = {
    currentUser: '',
    trucks: []
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
       currentUser: action.payload
     }
   } else {
     return {
       ...state,
     }
   }

   case GET_OWNERS_TRUCKS:
   // console.log('get owners truck payload', action.payload);
   //  console.log('state here', state.currentUser.id);
    return{
      ...state,
      trucks: action.payload
    }

     // case LOG_IN_FAILED:
     //   return {
     //     ...state,
     //   }
   default:
       return state
 }
}
