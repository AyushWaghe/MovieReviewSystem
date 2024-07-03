import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onClick }) => {
  const imageName=movie.poster;
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={`./images/${imageName}`} alt={movie.title} className="movie-image" />
      <div className="movie-title">{movie.title}</div>
      <div className="movie-hover-details">
        <p><strong>Summary:</strong> {movie.summary}</p>
      </div>
    </div>
  );
};

export default MovieCard;