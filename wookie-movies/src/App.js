import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

// action redux
import { getMovies } from '../src/actions';

function App({ getMovies, movies }) {
  useEffect(() => {
    getMovies();
  }, []);

  return movies ? (
    <div className='App'>
      {movies.map((movie, i) => (
        <div className='movie-container' key={i}>
          <h1>{movie.title}</h1>
          <p>{movie.genres[0]}</p>
        </div>
      ))}
    </div>
  ) : (
    'LOADING'
  );
}

const mapStateToProps = ({ moviesReducer }) => ({
  movies: moviesReducer.movies,
});

export default connect(mapStateToProps, {
  getMovies,
})(App);
