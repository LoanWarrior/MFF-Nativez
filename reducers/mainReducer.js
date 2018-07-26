import {
LOAD_TRUCK_DATA,
LOG_IN,
GET_OWNERS_TRUCKS,
GET_TRUCK
// LOG_IN_FAILED
} from '../actions'

let initialState = {
    currentUser: '',
    trucks: [],
    truck: []
}

export default (state = initialState, action) => {
 switch (action.type) {

   case LOAD_TRUCK_DATA:
     return  state = {
       ...state,
       currentUser: 'you found meg'
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
    return{
      ...state,
      trucks: action.payload
    }

    case GET_TRUCK:
    console.log("get truck reducer", action.payload);
    return{
      ...state,
      truck: action.payload
    }

   default:
       return state
 }
}
