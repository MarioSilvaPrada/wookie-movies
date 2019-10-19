import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.GET_MOVIE_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
