import {
LOG_IN,
GET_OWNERS_TRUCKS,
TRUCK_INFO,
OPEN_TRUCKS,
TRUCK_MENU,
COMPLETE_ORDER,
REGISTER_USER,
CREATE_TRUCK,
PLACE_ORDER,
DELETE_ITEM,
CREATE_ITEM,
UPDATED,
CURRENT_TRUCK,
} from '../actions'

let initialState = {
    currentUser: '',
    currentTruckId: 0,
    openTrucks: [],
    trucks: [],
    orders: {},
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

   case UPDATED:
  return {
    ...state
  }

  case CURRENT_TRUCK:
  console.log(hllo);
  console.log(action.payload);
  return {
    ...state,
    currentTruckId: action.payload
  }

   case COMPLETE_ORDER:
   return{
     ...state,
     orders: action.payload
   }

   case DELETE_ITEM:
   return {
     ...state,
     menu: action.payload
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
     orders: action.payload,
     currentTruckId: action.id
   }

   case CREATE_ITEM:
   return {
     ...state,
     menu: [...state.menu, action.payload]
   }

   default:
       return state
 }
}
