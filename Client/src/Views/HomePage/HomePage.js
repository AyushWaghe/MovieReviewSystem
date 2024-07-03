// client/src/components/HomePage.js
import React from 'react';
import MovieList from '../../components/MovieCard/MovieList';
import Navbar from '../../components/NavBar/navBar';

import './HomePage.css';

const HomePage = () => {
  return (
    <div>
        <div className="HomePage">
      <Navbar />
      <div className="home-page">
        <div className="background-image">
          <div className="DarkOverlayH"></div>
          <MovieList />
        </div>
      </div>
      
      </div>
    
    </div>
  );
};

export default HomePage;


     
