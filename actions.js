export const LOAD_TRUCK_DATA = 'LOAD_TRUCK_DATA'

export const loadTrucks = () => {
  return async dispatch => {
    const response = await fetch('https://mffapi.herokuapp.com/trucks')
    const trucks = await response.json()
    console.log(trucks);
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
