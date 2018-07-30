import {
LOG_IN,
GET_OWNERS_TRUCKS,
TRUCK_INFO,
OPEN_TRUCKS,
TRUCK_MENU,
COMPLETE_ORDER,
REGISTER_USER,
CREATE_TRUCK,
ADD_TO_CART
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

   case ADD_TO_CART:
   console.log('action payload here', action.payload);
   return {
     ...state,
     orders: action.payload
   }

///////////////NEEDS TO BE COMPLETE////////////////////////
   case COMPLETE_ORDER:
   console.log('complete order action payload', action.payload)
   console.log('here is the state of oreders', this.state)
   return {
     ...state,
     // orders: action.payload
   }

   case REGISTER_USER:
   return {
     ...state,
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
