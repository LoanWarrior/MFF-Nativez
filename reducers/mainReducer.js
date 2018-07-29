import {
LOG_IN,
GET_OWNERS_TRUCKS,
TRUCK_INFO,
OPEN_TRUCKS,
TRUCK_MENU,
COMPLETE_ORDER
} from '../actions'

let initialState = {
    currentUser: '',
    openTrucks: [],
    trucks: [],
    orders: [],
    menu: []
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

   case TRUCK_MENU:
   return{
     ...state,
     menu: action.payload
   }

   case OPEN_TRUCKS:
   return{
     ...state,
     openTrucks: action.payload
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

   case COMPLETE_ORDER:
   console.log('complete order action payload', action.payload)
   console.log('here is the state of oreders', state)
   return {
     ...state,
     // orders: action.payload
   }


   default:
       return state
 }
}
