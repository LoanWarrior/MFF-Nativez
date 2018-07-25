import {
LOAD_TRUCK_DATA
} from '../actions'

const initialState = {
 all: [],
}

export default (state = initialState, action) => {
 switch (action.type) {
   // console.log(action.payload);
   /////////switch cases for reducer/////////////
   case LOAD_TRUCK_DATA:
     return {
       ...state,
     }

   default:
     return state
 }
}
