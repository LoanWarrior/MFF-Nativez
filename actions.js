export const LOG_IN = 'LOG_IN'
export const GET_OWNERS_TRUCKS = 'GET_OWNERS_TRUCKS'
export const TRUCK_INFO = 'TRUCK_INFO'
export const OPEN_TRUCKS  = 'OPEN_TRUCKS'
export const TRUCK_MENU = 'TRUCK-MENU'
export const COMPLETE_ORDER = 'COMPLETE_ORDER'
export const REGISTER_USER = 'REGISTER_USER'
export const CREATE_TRUCK = 'CREATE_TRUCK'
export const PLACE_ORDER = 'PLACE_ORDER'
export const DELETE_ITEM = 'DELETE_ITEM'
export const CREATE_ITEM = 'CREATE_ITEM'

//mark an order complete which will delete that order from the data base
export const completeOrder = (orderId, truckId) => {
  return async dispatch => {
    // const response = await fetch(`https://mffapi.herokuapp.com/trucks/orders/${truckId}`, {
    const response = await fetch(`http://localhost:5445/orders/${orderId}/truck/${truckId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const orders = await response.json()
    console.log('after delete', orders);
    dispatch({
      type: COMPLETE_ORDER,
      payload: orders
    })
  }
}

//owner deleting item from menu
export const deleteItem = (itemId, truckId) => {
  return async dispatch => {
  const response = await fetch(`https://mffapi.herokuapp.com/items/${itemId}/truck/${truckId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const items = await response.json()
  dispatch({
      type: DELETE_ITEM,
      payload: items
    })
  }
}

//eater placing order
export const placeOrder = (newOrder, orderArray, total, navigate) => {
  newOrder.total = total
  navigate('LoggedInEater')
  return async dispatch => {
  const response = await fetch('https://mffapi.herokuapp.com/orders', {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const orderId = await response.json()
  orderArray.map(item => {
    item.order_id = orderId
  })
  const response2 = await fetch('https://mffapi.herokuapp.com/order_items', {
    method: 'POST',
    body: JSON.stringify(orderArray),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const itemsAdded = await response2.json()
  dispatch({
      type: PLACE_ORDER,
      payload: orderId
    })
  }
}

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
  let user = {
    username: value.username.toLowerCase(),
    password: value.password
  }
  // let user = {
  //   username: 'sarasmile',
  //   password: '123'
  // }
  return async dispatch => {
    // const response = await fetch('https://mffapi.herokuapp.com/login', {
      const response = await fetch('http://localhost:5445/login', {
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
    } else if (newUser.is_owner) {
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

// create a new user
export const registerUser = (userData, navigate) => {
  return async dispatch => {
    const response = await fetch('https://mffapi.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const newUserId = await response.json()
    if(newUserId.errorMessage){
    } else if (userData.is_owner) {
      dispatch ({
        type: LOG_IN,
        payload: newUserId
      })
      navigate('LoggedIn')
    } else {
      dispatch ({
        type: LOG_IN,
        payload: newUserId
      })
      navigate('LoggedInEater')
    }
  }
}

export const createMenuItem = (dishData, truckId, navigate) => {
  console.log(dishData);
  return async dispatch => {
    // const response = await fetch('https://mffapi.herokuapp.com/items', {
    const response = await fetch(`http://localhost:5445/items/${truckId}`, {
      method: 'POST',
      body: JSON.stringify(dishData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const dish = await response.json()
    console.log('223 dish', dish)
    dispatch({
      type: CREATE_ITEM,
      payload: dish[0]
    })
  }
}

//create a new truck as a owner
export const createTruck = (truckData, navigate, id) => {
  navigate('LoggedIn')
  let truckInfo = {
    name: truckData.name,
    veggieFriendly: truckData.veggieFriendly,
    imageUrl: truckData.imageUrl,
    takes_orders: truckData.takes_orders,
    owner_id: id
  }
  return async dispatch => {
    const response = await fetch(`http://localhost:5445/trucks/${id}`, {
      method: 'POST',
      body: JSON.stringify(truckInfo),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const trucks = await response.json()
    dispatch({
      type: GET_OWNERS_TRUCKS,
      payload: trucks
    })
  }
}
