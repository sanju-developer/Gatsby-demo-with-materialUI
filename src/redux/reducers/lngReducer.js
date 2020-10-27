import { actionConstants } from "../actions/actionConstant"

const initialState = {
    selectedlng:'en'
}

const LngReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstants.CURRENTLNG:
      return { ...state, selectedlng: action.payload }
    default:
      return state
  }
}

export default LngReducer
