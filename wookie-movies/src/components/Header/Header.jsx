import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';
import { FaSearch } from 'react-icons/fa';

import { getSearchInput } from '../../actions';

const Header = ({ movies, getSearchInput, input, history }) => {
  useEffect(() => {
    getSearchInput('');
  }, []);

  // check if there is a movie equal to search input and submit it
  const onSubmitInput = (e) => {
    e.preventDefault();
    let userInput = input;
    let movieSlug = '';
    for (let movie of movies) {
      if (movie.title.toLowerCase() === userInput.toLowerCase()) {
        movieSlug = movie.slug;
      }
    }
    history.push(`/${movieSlug}`);
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

        {/* if user search for a movie search filter will show up */}
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
                  <p>{movie.title}</p>
                </Link>
              ))}
          </div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = ({ searchInputReducer }) => ({
  input: searchInputReducer.searchInput,
});

export default connect(mapStateToProps, {
  getSearchInput,
})(Header);
