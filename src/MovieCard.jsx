import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, posterPath, voteAverage }) => {
  return (
    <div className="movie-card">
      <Link to="/details">
        <img src={posterPath} alt={title} />
        <h3>{title}</h3>
        <p>평점: {voteAverage}</p>
      </Link>
    </div>
  );
};

export default MovieCard;