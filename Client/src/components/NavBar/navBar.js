import React, { useEffect, useState } from 'react';
import './navBar.css';
import axios from 'axios';

const Navbar = ({ filterData }) => {

  const [searchMovie,setSearchMovie]=useState("");

  const selectedFilters = {
    ratings: [],
    genres: [],
    movieTitle:"",
    superId: ""
  };

  const toggle = () => {
    // toggle 'how' class on mobile menu
    const mobileMenu = document.querySelector('.mobile-nav');
    mobileMenu.classList.toggle('show');
  };

  const toggleDropdown = () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    const icon = document.getElementById('icon');

    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
    } else {
      dropdownContent.style.display = 'block';
      icon.style.transform = 'rotate(180deg)';
    }
  };

  const handleApplyFiltersClick = async () => {

    document.querySelectorAll('.dropdown-content input[type="checkbox"]:checked').forEach((checkbox) => {
      const category = checkbox.closest('.category').querySelector('span').innerText.toLowerCase();
      if (category === 'rating') {
        selectedFilters.ratings.push(checkbox.value);
      } else if (category === 'genre') {
        selectedFilters.genres.push(checkbox.value);
      }
    });

    // Perform search with the selected filters
    // console.log('Selected Filters:', selectedFilters);

    // Close the dropdown after applying filters
    const dropdownContent = document.querySelector('.dropdown-content');
    const icon = document.getElementById('icon');
    dropdownContent.style.display = 'none';
    icon.style.transform = 'rotate(0deg)';

    filterData(selectedFilters);
  };

  const handleSearchClick=()=>{
    selectedFilters.movieTitle=searchMovie;
    selectedFilters.genres=[];
    selectedFilters.ratings=[];
    filterData(selectedFilters);
  }

  // useEffect(() => {
  //   handleApplyFiltersClick(); // This will execute once when component mounts
  // }, []);

  return (
    <nav className="navbar">
      {/* Navigation Content */}
      <div className="content">
        {/* Logo */}
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="desktop">
          <ul className="links">
            <li>
              <div className="searchbar">
                {/* Dropdown */}
                <div className="dropdown">
                  <div id="drop-text" className="dropdown-text" onClick={toggleDropdown}>
                    <span id="span">Filters </span>
                    <i id="icon" className="fa-solid fa-chevron-down" />
                  </div>
                  <div className="dropdown-content">
                    {/* Ratings */}
                    <div className="category">
                      <span>Rating</span>
                      <label>
                        <input type="checkbox" value="1" /> 1 star
                      </label>
                      <label>
                        <input type="checkbox" value="2" /> 2 stars
                      </label>
                      <label>
                        <input type="checkbox" value="3" /> 3 stars
                      </label>
                      <label>
                        <input type="checkbox" value="4" /> 4 stars
                      </label>
                      <label>
                        <input type="checkbox" value="5" /> 5 stars
                      </label>
                    </div>
                    {/* Genres */}
                    <div className="category">
                      <span>Genre</span>
                      <label>
                        <input type="checkbox" value="action" /> Action
                      </label>
                      <label>
                        <input type="checkbox" value="comedy" /> Comedy
                      </label>
                      <label>
                        <input type="checkbox" value="horror" /> Horror
                      </label>
                      <label>
                        <input type="checkbox" value="Romance" /> Love
                      </label>
                      <label>
                        <input type="checkbox" value="Drama" /> Drama
                      </label>
                      <label>
                        <input type="checkbox" value="sci-fi" /> Sci-fi
                      </label>
                    </div>
                    <button className="apply-btn" onClick={handleApplyFiltersClick}>
                      Apply
                    </button>
                  </div>
                </div>
                {/* Search Box */}
                <div className="search-box">
                  <input type="text" 
                  id="search-input" 
                  placeholder="Search for movies" 
                  value={searchMovie}
                  onChange={(e)=>setSearchMovie(e.target.value)}
                  />
                  <button onClick={handleSearchClick}><i className="fa-solid fa-magnifying-glass" /></button>
                  
                </div>
              </div>
            </li>
            <li>
              <button className="nav-btn">Home</button>
            </li>
            <li>
              <button className="nav-btn">Movies</button>
            </li>
          </ul>
          <div className="button">
            <li>
              <button className="btn signin">Signin</button>
            </li>
            <li>
              <button className="btn signup">Signup</button>
            </li>
          </div>
        </div>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggle}>
          <i className="fa-solid fa-bars" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul className="mobile-nav">
        <li className="active">
          <i className="fa-solid fa-house" />
          <button className="nav-btn">Home</button>
        </li>
        <li>
          <i className="fa-solid fa-film" />
          <button className="nav-btn">Movies</button>
        </li>
        <li>
          <i className="fa-solid fa-right-to-bracket" />
          <button className="nav-btn">SignIn</button>
        </li>
        <li>
          <i className="fa-solid fa-user-plus" />
          <button className="nav-btn">SignUp</button>
        </li>
      </ul>

      <div className="backdrop" onClick={toggle} />
    </nav>
  );
};

export default Navbar;
