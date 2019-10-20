import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MoviePage.css';

import { getMovieInfo, getSearchInput } from '../../actions';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
// Components
import Header from '../Header/Header';

import { FaHome } from "react-icons/fa";

const MoviePage = ({ match, getMovieInfo, getSearchInput, info, history }) => {
  let movieUrl = match.params.movieSlug;

  useEffect(
    () => {
      getMovieInfo(movieUrl);
      getSearchInput('');
    },
    [ movieUrl ],
  );

  // GET STARS
  const getStars = () => {
    let numberStars = [];

    let imdbScale = 10;
    let movieRating = info.imdb_rating;
    const stars = movieRating * 5 / imdbScale;

    let roundDownStars = Math.floor(stars);
    let isDecimal = stars % 1;

    for (let i = 1; i <= 5; i++) {
      // give number of stars based on round number geted on roundDownStars
      if (i <= roundDownStars) {
        numberStars.push(<FaStar key={i} />);
      } else if (isDecimal && numberStars[i - 2]['type']['displayName'] !== FaStarHalfAlt) {
        // if number of stars is decimal and we if we dont have already a hal star
        numberStars.push(<FaStarHalfAlt key={i} />);
      } else {
        // fill the rest with empty stars
        numberStars.push(<FaRegStar key={i} />);
      }
    }

    return numberStars
  };

  console.log(info);
  // console.log(info.cast)
  return info ? (
    <div className='movie-page-container'>
      <Header history={history} />
      <div className='movie-info'>
        <img src={info.poster} />
        <div className='movie-details'>
          <div className='title-rating'>
            <h2>
              {info.title} ( rating: {info.imdb_rating} )
            </h2>
            <div className='rating-stars'>{getStars()}</div>
          </div>
          <div  className='movie-data'>
            <div className='movie-specs'>
              {new Date(info.released_on).getFullYear()} | {info.length} | {info.director}
            </div>
            <div className='movie-cast'><b>Cast:</b> {info.cast.join(', ')}</div>
          </div>
          <div  className='movie-overview'>
            {info.overview}
          </div>
          <Link  className='backBtn'
           to={'/'}
           style={{ textDecoration: 'none', color: 'black' }}>
            <FaHome />
            <span>Go Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    'LOADING'
  );
};

const mapStateToProps = ({ movieInfoReducer }) => ({
  info: movieInfoReducer.info,
});

export default connect(mapStateToProps, {
  getMovieInfo,
  getSearchInput,
})(MoviePage);
