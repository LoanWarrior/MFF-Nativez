export const LOAD_TRUCK_DATA = 'LOAD_TRUCK_DATA'
export const LOG_IN = 'LOG_IN'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'

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

export const logIn = (navigate) => {
  let user = {
    username: 'saraSmile',
    password: '12'
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
    console.log(newUser);
    if(newUser.isOwner){
      navigate('LoggedIn')
    } else {
      navigate('Home')
    }
    dispatch ({
      type: LOG_IN,
      payload: newUser
    })
    // .catch(err => dispatch({
    //   type: LOG_IN_FAILED,
    //   payload: err
    // }))
  }
}
