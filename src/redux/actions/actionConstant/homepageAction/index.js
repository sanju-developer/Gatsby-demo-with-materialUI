import { actionTypes } from ".."
import { GetHomePageDataService } from "../../../../services/homepage"

export const GetHomePageDataAction = () => {
  return async dispatch => {
    try {
      const data = await GetHomePageDataService()
      dispatch({
        type: actionTypes.API_DATA,
        payload: data,
      })
    } catch (err) {
      console.log("some error has been occured while making api call")
    } finally {
      console.log("success")
    }
  }
}
