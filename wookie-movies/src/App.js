import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

// action redux
import { getMovies } from '../src/actions';

// Components
import GenresContainer from './components/GenresContainer/GernresContainer';
import Header from './components/Header/Header';


function App({ getMovies, genres, movies, history }) {
  useEffect(() => {
    getMovies();
  }, []);

  return movies && genres ? (
    <div className='App'>
      <Header movies={movies} history={history}/>
      <GenresContainer genres={genres} movies={movies}/>
    </div>
  ) : (
    'LOADING'
  );
}

const mapStateToProps = ({ moviesReducer }) => ({
  movies: moviesReducer.movies,
  genres: moviesReducer.genres,
});

export default connect(mapStateToProps, {
  getMovies,
})(App);
