import { combineReducers } from 'redux';
import HomePageReducer from './homepageReducer';

const rootReducer = combineReducers({ 
    home: HomePageReducer 
})

export default rootReducer