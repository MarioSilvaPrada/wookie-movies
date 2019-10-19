import React from 'react';
import './GenresContainer.css';
import { Link } from 'react-router-dom';


import { FaStar } from 'react-icons/fa';


const GenresContainer = ({ genres, movies }) => {
  return (
    <div className='app-container'>
      {genres.map((genre, i) => (
        <div key={i} className='genre-container'>
          <h2 className='genre-type'>{genre}</h2>
          <div className='movies-container'>
            {movies.map(
              (movie, i) =>
                movie.genres.includes(genre) && (
                  <Link to={`/${movie.slug}`} key={i} className='movie' style={{ textDecoration: 'none', color: 'white' }}>
                    <img className='movie-poster' alt='poster' src={movie.poster} />
                    <p>{movie.title}</p>
                    <span className='movie-rating'>
                      <FaStar /> <span>{movie.imdb_rating}</span>
                    </span>
                  </Link>
                ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenresContainer
