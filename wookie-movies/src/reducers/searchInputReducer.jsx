import * as TYPES from '../actions/types';

export default (searchInput = '', action) => {
  switch (action.type) {
    case TYPES.GET_SEARCH_INPUT:
      return { searchInput: action.payload };
    default:
      return searchInput;
  }
};
