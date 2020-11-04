import { actionConstants, actionTypes } from "../actions/actionConstant"

const initialState = {
  selectedlng: "en",
}

const CovidReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.API_DATA:
      return { ...state, apiData: action.payload }
    case actionTypes.IS_API_LOADING:
      return { ...state, isApiLoading: action.payload }
    case actionConstants.IS_API_LOADING_FOR_COVID_COUNTRIES:
      return { ...state, isApiLoadingForCovidCountries: action.payload }
    case actionConstants.API_DATA_OF_COVID_COUNTRIES:
      return { ...state, apiDataOfCovidCountries: action.payload }
    case actionConstants.IS_API_ERROR_FOR_COVID_COUNTRIES:
      return { ...state, apiFailedForCovidCounties: action.payload }
    case actionConstants.IS_API_ERROR_FOR_GLOBE_INFO:
      return { ...state, apiFailedForGlobeInfo: action.payload }
    default:
      return state
  }
}

export default CovidReducer
