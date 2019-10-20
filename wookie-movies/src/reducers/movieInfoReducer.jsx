import * as TYPES from '../actions/types';

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.GET_MOVIE_INFO:
      return { ...state, info: action.payload };
    case TYPES.SET_LOADING_MOVIE_PAGE:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
