import {
  GetCovidAffectedCounteriesInfoService,
  GetCovidGlobalInfoService,
} from "../../../services/covid"
import { actionConstants, actionTypes } from "../actionConstant"

export const GetCovidGlobalInfo = () => {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.IS_API_LOADING, payload: true })
      const data = await GetCovidGlobalInfoService()
      dispatch({
        type: actionTypes.API_DATA,
        payload: data,
      })
    } catch (err) {
      dispatch({ type: actionConstants.IS_API_ERROR_FOR_GLOBE_INFO, payload: err })
      console.log("some error has been occured while making api call")
    } finally {
      dispatch({ type: actionTypes.IS_API_LOADING, payload: false })
      console.log("success")
    }
  }
}

export const GetCovidAffectedCounteriesInfo = () => {
  return async dispatch => {
    try {
      dispatch({
        type: actionConstants.IS_API_LOADING_FOR_COVID_COUNTRIES,
        payload: true,
      })
      const data = await GetCovidAffectedCounteriesInfoService()
      dispatch({
        type: actionConstants.API_DATA_OF_COVID_COUNTRIES,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: actionConstants.IS_API_ERROR_FOR_COVID_COUNTRIES,
        payload: err,
      })
      console.log("some error has been occured while making api call")
    } finally {
      dispatch({
        type: actionConstants.IS_API_LOADING_FOR_COVID_COUNTRIES,
        payload: false,
      })
      console.log("success")
    }
  }
}
