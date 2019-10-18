import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.GET_MOVIES:
      return { ...state, movies: action.payload };
    case TYPES.GET_GENRES:
      return { ...state, genres: action.payload };
    default:
      return state;
  }
};
