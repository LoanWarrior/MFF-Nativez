export const LOG_IN = 'LOG_IN'
export const GET_OWNERS_TRUCKS = 'GET_OWNERS_TRUCKS'
export const TRUCK_INFO = 'TRUCK_INFO'
export const OPEN_TRUCKS  = 'OPEN_TRUCKS'
export const TRUCK_MENU = 'TRUCK-MENU'
export const COMPLETE_ORDER = 'COMPLETE_ORDER'
export const REGISTER_USER = 'REGISTER_USER'
export const CREATE_TRUCK = 'CREATE_TRUCK'

//get open trucks
export const getOpenTrucks = (id) => {
  return async dispatch => {
    // const response = await fetch(`https://mffapi.herokuapp.com/trucks`)
    const response = await fetch(`http://localhost:5445/trucks`)
    const trucks = await response.json()
    dispatch({
        type: OPEN_TRUCKS,
        payload: trucks
      })
  }
}

//get trucks menu
export const truckMenu = (id) => {
  return async dispatch => {
    // const response = await fetch(`https://mffapi.herokuapp.com/trucks/menu/${id}`)
    const response = await fetch(`http://localhost:5445/trucks/menu/${id}`)
    const menu = await response.json()
    dispatch({
        type: TRUCK_MENU,
        payload: menu
      })
  }
}

//log-in action, get user info, hardcoded for owner///

export const logIn = (value, navigate) => {
  // let user = {
  //   username: value.username.toLowerCase(),
  //   password: value.password
  // }
  let user = {
    username: 'sarasmile',
    password: '123'
  }
  return async dispatch => {
    const response = await fetch('https://mffapi.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const newUser = await response.json()
    if(newUser.errorMessage){
      alert(newUser.errorMessage)
    } else if (newUser.isOwner) {
      dispatch ({
        type: LOG_IN,
        payload: newUser
      })
      navigate('LoggedIn')
    } else {
      dispatch ({
        type: LOG_IN,
        payload: newUser
      })
      navigate('LoggedInEater')
    }
  }
}

//trucks related to one owner

export const ownersTrucks = (id) => {
  return async dispatch => {
    // const response = await fetch(`https://mffapi.herokuapp.com/trucks/${id}`)
    const response = await fetch(`http://localhost:5445/trucks/${id}`)
    const trucks = await response.json()
    dispatch({
        type: GET_OWNERS_TRUCKS,
        payload: trucks
      })
  }
}

// changes view to specific truck

export const linkToTruck = (truckId, navigate) => {
  navigate('SpecificTruck', truckId)
}

// returns all orders by order id for one truck

export const truckInfo = (truckId) => {
    return async dispatch => {
      // const response = await fetch(`https://mffapi.herokuapp.com/trucks/orders/${truckId}`)
      const response = await fetch(`http://localhost:5445/trucks/orders/${truckId}`)
      const orders = await response.json()
      dispatch({
        type: TRUCK_INFO,
        payload: orders
      })
    }
}

///////////////NEEDS TO BE COMPLETE////////////////////////

//mark an order complete which will delete that order from the data base
export const completeOrder = (orderId) => {
  console.log('order id is:', orderId);
  return async dispatch => {
    // const response = await fetch(`https://mffapi.herokuapp.com/trucks/orders/${truckId}`)
    const response = await fetch(`http://localhost:5445/orders/order/${orderId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const orders = await response.json()
    console.log("orders vari here", orders);
    dispatch({
      type: COMPLETE_ORDER,
    })
  }
}

// create a new user
export const registerUser = (userData, navigate) => {
  console.log(userData);
  //why is this function not defined??
  //post request to make a new user
  dispatch({
    type: REGISTER_USER,
    payload: orderId
  })
}

//create a new truck as a owner
export const createTruck = (truckData, navigate) => {
  console.log(truckData, navigate);
  //why is this function not defined??
  //post request to make a new truck
  dispatch({
    type: CREATE_TRUCK,
    payload: orderId
  })
///////////////NEEDS TO BE COMPLETE////////////////////////



}
