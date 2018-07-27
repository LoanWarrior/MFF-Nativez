import {
LOG_IN,
GET_OWNERS_TRUCKS,
TRUCK_INFO
} from '../actions'

let initialState = {
    currentUser: '',
    trucks: [],
    orders: []
}

export default (state = initialState, action) => {
 switch (action.type) {

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
   return{
     ...state,
     trucks: action.payload
   }

   case TRUCK_INFO:
   return {
     ...state,
     orders: action.payload
   }




   default:
       return state
 }
}
