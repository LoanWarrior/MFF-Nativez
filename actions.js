export const LOAD_TRUCK_DATA = 'LOAD_TRUCK_DATA'
export const LOG_IN = 'LOG_IN'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'
export const GET_OWNERS_TRUCKS = 'GET_OWNERS_TRUCKS'

export const loadTrucks = () => {
  return async dispatch => {
    const response = await fetch('https://mffapi.herokuapp.com/trucks')
    const trucks = await response.json()
    dispatch({
        type: LOAD_TRUCK_DATA,
        payload: trucks
      })
      // .catch(err => dispatch({
      //   type: LOAD_API_DATA_FAILED,
      //   payload: err
      // }))
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
      // .catch(err => dispatch({
      //   type: LOAD_API_DATA_FAILED,
      //   payload: err
      // }))
  }
}

export const logIn = (navigate) => {
  let user = {
    username: 'saraSmile',
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
    if(newUser.isOwner){
      dispatch ({
        type: LOG_IN,
        payload: newUser
      })
      navigate('LoggedIn', {currentUser: newUser})
    } else {
      navigate('Home')
      dispatch ({
        type: LOG_IN,
        payload: newUser
      })
    }
    // .catch(err => dispatch({
    //   type: LOG_IN_FAILED,
    //   payload: err
    // }))
  }
}
