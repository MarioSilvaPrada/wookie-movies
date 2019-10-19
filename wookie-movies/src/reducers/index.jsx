import { combineReducers } from 'redux';

// reducers
import moviesReducer from './moviesReducer';
import searchInputReducer from './searchInputReducer';

export default combineReducers({
  moviesReducer,
  searchInputReducer
});
