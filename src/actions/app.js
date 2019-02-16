import axios from 'axios'

export const IS_FETCHING = 'IS_FETCHING'
export const FETCHED = 'FETCHED'
export const FETCHED_ERROR = 'FETCHED_ERROR'

export function isFetching(bool) {
  return {
    type: IS_FETCHING,
    isLoading: bool
  }
}

export function fetchedError(err) {
  return {
    type: FETCHED_ERROR,
    error: err
  }
}

export function fetched(data) {
  return {
    type: FETCHED,
    data
  }
}

//thunk
export function thunkFetchData() {
  return async (dispatch) => {
    dispatch(isFetching(true))
    try {
      const { data } = await axios.get('https://api.icndb.com/jokes')
      console.log('data', data)
      dispatch(fetched(data.value))
      dispatch(isFetching(false))
    } catch (error) {
      console.log('error: ', error)
      dispatch(fetchedError(error))
      dispatch(isFetching(false))
    }
  }
}