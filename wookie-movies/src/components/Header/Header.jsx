import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';
import { FaSearch } from 'react-icons/fa';

import { getSearchInput, getMovies } from '../../actions';

const Header = ({ movies, getSearchInput, input, history, getMovies }) => {
  useEffect(() => {
    getSearchInput('');
  }, []);

  // if user starts by 'Movie Page' we need to get all movies so the filter can work
  if (!movies) {
    getMovies();
  }

  // check if there is a movie equal to search input and submit it
  // user needs to insert the exact movie name or choose one of the options given by search modal
  const onSubmitInput = (e) => {
    e.preventDefault();
    let userInput = input;
    let movieSlug = '';
    for (let movie of movies) {
      if (movie.title.toLowerCase() === userInput.toLowerCase()) {
        movieSlug = movie.slug;
      }
    }
    input = '';

    // if movieSlug exists go to that route
    movieSlug && history.push(`/${movieSlug}`);
  };
  return (
    <div className='app-header'>
      <div className='logo'>
        Wookie <br /> Movies
      </div>
      <form className='search-input' onSubmit={(e) => onSubmitInput(e)}>
        <FaSearch />
        <input
          type='text'
          placeholder='Search for movie'
          onChange={(e) => getSearchInput(e.target.value)}
        />

        {/* if user search for a movie, modal search filter will show up */}
        {input && (
          <div className='search-filter'>
            {movies
              .filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()))
              .map((movie, i) => (
                <Link
                  key={i}
                  to={`/${movie.slug}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <p className='movie-selection'>{movie.title}</p>
                </Link>
              ))}
          </div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = ({ searchInputReducer, moviesReducer }) => ({
  input: searchInputReducer.input,
  movies: moviesReducer.movies,
});

export default connect(mapStateToProps, {
  getSearchInput,
  getMovies,
})(Header);
