// client/src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import moviesData from '../../moviesData';
import './MovieList.css';
import Navbar from '../NavBar/navBar';


const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Use the real movie data
    setMovies(moviesData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="movie-list">
        <div className="HomeDiv">
          <div className="DarkOverlayM">
            <div className="movie-container">
              {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;




  