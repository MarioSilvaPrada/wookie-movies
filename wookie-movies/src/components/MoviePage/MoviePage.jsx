import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './MoviePage.css';

import { getMovieInfo } from '../../actions';

const MoviePage = ({ match, getMovieInfo, info }) => {
  let movieUrl = match.params.movieSlug;

  useEffect(() => {
    getMovieInfo(movieUrl);
  }, []);

  return (
    <div className='movie-container'>
      <img src={info.poster} />
    </div>
  );
};

const mapStateToProps = ({ movieInfoReducer }) => ({
  info: movieInfoReducer,
});

export default connect(mapStateToProps, {
  getMovieInfo,
})(MoviePage);
