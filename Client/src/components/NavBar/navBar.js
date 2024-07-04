import React from 'react';
import './navBar.css';


  const Navbar = () => {
    
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

  const applyFilters = () => {
    // Collect selected filters
    const selectedFilters = {
      ratings: [],
      genres: [],
    };

    document.querySelectorAll('.dropdown-content input[type="checkbox"]:checked').forEach((checkbox) => {
      const category = checkbox.closest('.category').querySelector('span').innerText.toLowerCase();
      if (category === 'rating') {
        selectedFilters.ratings.push(checkbox.value);
      } else if (category === 'genre') {
        selectedFilters.genres.push(checkbox.value);
      }
    });

    // Perform search with the selected filters
    // For demonstration, we'll just log the filters
    console.log('Selected Filters:', selectedFilters);

    // Close the dropdown after applying filters
    const dropdownContent = document.querySelector('.dropdown-content');
    const icon = document.getElementById('icon');
    dropdownContent.style.display = 'none';
    icon.style.transform = 'rotate(0deg)';

    // Replace the following line with actual search functionality
    // document.getElementById('results').innerText = `Searching with filters: ${JSON.stringify(selectedFilters)}`;
  };
  
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
                    <span id="span">Filters</span>
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
                        <input type="checkbox" value="love" /> Love
                      </label>
                      <label>
                        <input type="checkbox" value="drama" /> Drama
                      </label>
                      <label>
                        <input type="checkbox" value="sci-fi" /> Sci-fi
                      </label>
                    </div>
                    <button className="apply-btn" onClick={applyFilters}>
                      Apply
                    </button>
                  </div>
                </div>
                {/* Search Box */}
                <div className="search-box">
                  <input type="text" id="search-input" placeholder="Search for movies" />
                  <i className="fa-solid fa-magnifying-glass" />
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
              <button className="btn signin" >
                Signin
              </button>
            </li>
            <li>
              <button className="btn signup">
                Signup
              </button>
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

      <div class="backdrop" onclick="toggle()"></div>

    <div class="content-list">
      <div class="list-container">
        <h3 class="list-header">You might also search for...</h3>
          <ul class="item-list">
              <li href="">Highly-rated 10 movies</li>
              <li href="">Least-rated 10 movies</li>
              <li href="">Recently released top 10 movies</li>
              <li href="">Oldest movies</li>
          </ul>
      </div>
    </div>
      <div className="backdrop" onClick={toggle} />
    </nav>
  );
};

export default Navbar;

