import * as TYPES from './types';
import api from '../api/api';

export const getMovies = () => async (dispatch) => {
  const res = await api.get();
  dispatch({
    type: TYPES.GET_MOVIES,
    payload: res.data.movies,
  });
};
