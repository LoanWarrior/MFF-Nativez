export const LOAD_TRUCK_DATA = 'LOAD_TRUCK_DATA'
export const LOG_IN = 'LOG_IN'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'
export const GET_OWNERS_TRUCKS = 'GET_OWNERS_TRUCKS'
export const GET_TRUCK = 'GET_TRUCK'

export const loadTrucks = () => {
  return async dispatch => {
    const response = await fetch('https://mffapi.herokuapp.com/trucks')
    const trucks = await response.json()
    dispatch({
        type: LOAD_TRUCK_DATA,
        payload: trucks
      })
  }
}

export const ownersTrucks = (id) => {
  return async dispatch => {
    const response = await fetch(`https://mffapi.herokuapp.com/trucks/${id}`)
    const trucks = await response.json()
    dispatch({
        type: GET_OWNERS_TRUCKS,
        payload: trucks
      })
  }
}

export const linkToTruck = (truckId, navigate) => {
  console.log("outside the retur")
  return async dispatch => {
      dispatch({
        type: GET_TRUCK,
        payload: truckId
      })
      navigate('SpecificTruck')
  }
}


export const logIn = (value, navigate) => {
  let user = {
    username: value.username.toLowerCase(),
    password: value.password
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
      console.log('owner');
      dispatch ({
        type: LOG_IN,
        payload: newUser
      })
      navigate('LoggedIn')
    } else {
      console.log('eater');
      dispatch ({
        type: LOG_IN,
        payload: newUser
      })
      navigate('Order')
    }
  }
}
