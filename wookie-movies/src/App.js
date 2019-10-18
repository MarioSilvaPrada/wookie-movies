import React, { useEffect, useState } from 'react';
import './App.css';

import { connect } from 'react-redux';

// action redux
import { getMovies } from '../src/actions';

function App({ getMovies, genres, movies }) {
  useEffect(() => {
    getMovies();
  }, []);

  return movies && genres ? (
    <div className='App'>
      {genres.map((genre) => (
        <div className='genre-container'>
          <h2 className='genre-type'>{genre}</h2>
          <div className='movies-container'>
            {movies.map(
              (movie, i) =>
                movie.genres.includes(genre) && (
                  <div className='movie'>
                    <img className='movie-poster' alt='poster' src={movie.poster} />
                    <p>{movie.title}</p>
                  </div>
                )
            )}
          </div>
        </div>
      ))}
      {/* {movies.map((movie, i) => (
        <div className='movie-container' key={i}>
          <h1>{movie.title}</h1>
          <p>{movie.genres[0]}</p>
        </div>
      ))} */}
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
