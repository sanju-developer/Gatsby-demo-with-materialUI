import { combineReducers } from "redux"
import HomePageReducer from "./homepageReducer"
import LngReducer from "./lngReducer"

const rootReducer = combineReducers({
  home: HomePageReducer,
  lng: LngReducer,
})

export default rootReducer
