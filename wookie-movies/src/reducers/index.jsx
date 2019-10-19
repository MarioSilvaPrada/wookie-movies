import { combineReducers } from 'redux';

// reducers
import moviesReducer from './moviesReducer';
import searchInputReducer from './searchInputReducer';
import movieInfoReducer from './movieInfoReducer';


export default combineReducers({
  moviesReducer,
  searchInputReducer,
  movieInfoReducer
});


