import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.GET_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
