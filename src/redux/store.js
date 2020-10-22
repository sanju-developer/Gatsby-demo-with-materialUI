import React from 'react'
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import rootReducer from "./reducers/rootReducer"
import { Provider } from "react-redux"

const initialState = {}
const middleware = [logger, thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
)

// export default store
export default ({ element }) => <Provider store={store}>{element}</Provider>

