import { actionTypes } from "../actions/actionConstant"

const initialState = {
  isApiLoading: true,
  apiData: null,
  apiError: null,
}

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case `home_${actionTypes.API_DATA}`:
      return { ...state, apiData: action.payload }
    default:
      return state
  }
}

export default HomePageReducer
