import { combineReducers } from "redux"
import CovidReducer from "./covidReducer"
import HomePageReducer from "./homepageReducer"
import LngReducer from "./lngReducer"

const rootReducer = combineReducers({
  home: HomePageReducer,
  lng: LngReducer,
  covid:CovidReducer
})

export default rootReducer
