// client/src/components/MovieCard.js
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onClick }) => {
  const imageName=movie.poster;
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={`./images/${imageName}`} alt={movie.title} className="movie-image" />
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>Duration: {movie.duration} </p>
        <p>Average Stars: {movie.rating} ★</p>
        <p>Summary: {movie.summary}</p>
      </div>
    </div>
  );
};

export default MovieCard;