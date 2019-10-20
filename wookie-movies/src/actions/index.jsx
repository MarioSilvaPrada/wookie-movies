import * as TYPES from './types';
import api from '../api/api';

export const getMovies = () => async (dispatch) => {
  const res = await api.get();
  const movies = res.data.movies;

  // Get Movies
  dispatch({
    type: TYPES.GET_MOVIES,
    payload: movies,
  });

  //   Get Genres
  let genresArr = [];

  //   interate each genre in each movie
  for (let movie of movies) {
    movie.genres.map((genre) => {
      if (!genresArr.includes(genre)) {
        genresArr.push(genre);
      }
    });
  }
  dispatch({
    type: TYPES.GET_GENRES,
    payload: genresArr,
  });
};

export const getSearchInput = (input) => async (dispatch) => {
  let searchInput = input;
  dispatch({
    type: TYPES.GET_SEARCH_INPUT,
    payload: searchInput,
  });
}

export const getMovieInfo = (url) => async (dispatch) => {
  const res = await api.get(url);
  dispatch({
    type: TYPES.GET_MOVIE_INFO,
    payload: res.data,
  });

  dispatch({
    type: TYPES.SET_LOADING_MOVIE_PAGE,
    payload: false,
  });
}
