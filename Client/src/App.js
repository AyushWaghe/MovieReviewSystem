// client/src/App.js
import React from 'react';
import MovieList from './Components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Review Website</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;

