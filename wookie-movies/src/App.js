import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

// action redux
import { getMovies, setMoviePageLoading } from '../src/actions';

// Components
import GenresContainer from './components/GenresContainer/GernresContainer';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';


function App({ getMovies, genres, movies, history, setMoviePageLoading }) {
  useEffect(() => {
    getMovies();
    setMoviePageLoading(true)
  }, []);

  return movies && genres ? (
    <div className='App'>
      <Header history={history}/>
      <GenresContainer genres={genres} movies={movies}/>
    </div>
  ) : (
    <Spinner />
  );
}

const mapStateToProps = ({ moviesReducer }) => ({
  movies: moviesReducer.movies,
  genres: moviesReducer.genres,
});

export default connect(mapStateToProps, {
  getMovies,
  setMoviePageLoading
})(App);
