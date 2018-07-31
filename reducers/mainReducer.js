import {
LOG_IN,
GET_OWNERS_TRUCKS,
TRUCK_INFO,
OPEN_TRUCKS,
TRUCK_MENU,
COMPLETE_ORDER,
REGISTER_USER,
CREATE_TRUCK,
PLACE_ORDER
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

///// logs in registered user / login
   case LOG_IN:
   if(action.payload.isOwner){
     return {
       ...state,
       currentUser: action.payload
     }
   } else {
     return {
       ...state,
      currentUser: action.payload
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

///////////////NEEDS TO BE COMPLETE////////////////////////
   case PLACE_ORDER:
   // console.log('complete order action payload', action.payload)
   return {
     ...state,
     // orders: action.payload
   }


   case CREATE_TRUCK:
   return {
     ...state,
   }
///////////////NEEDS TO BE COMPLETE////////////////////////

   default:
       return state
 }
}
