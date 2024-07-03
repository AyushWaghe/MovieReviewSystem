import React, { useState } from 'react';
import './App.css';
import movies from './moviesData';
import MovieCard from './Components/MovieCard'; // Import the MovieCard component

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Review Website</h1>
      </header>
      <div className="container">
        <div className="left-column">
          {}
        </div>
        <div className="main-content">
          <div className="movie-container">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={() => handleCardClick(movie)} />
            ))}
          </div>
        </div>
        <div className="right-column">
          {}

        </div>
      </div>
      {selectedMovie && (
        <div className="modal" onClick={handleClosePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <img src={process.env.PUBLIC_URL + '/' + selectedMovie.poster} alt={selectedMovie.title} />
            <h3>{selectedMovie.title}</h3>
            <p><strong>Duration:</strong> {selectedMovie.duration}</p>
            <p><strong>Average Stars:</strong> {'★'.repeat(selectedMovie.stars)}</p>
            <p><strong>Summary:</strong> {selectedMovie.summary}</p>
            <p><strong>Year of Release:</strong> {selectedMovie.release_year}</p>
            <p><strong>Language:</strong> {selectedMovie.language}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
