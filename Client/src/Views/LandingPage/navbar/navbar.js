const mobileMenu = document.querySelector(".mobile-nav");

//function to show or hide the mobile menu
const toggle = () => {
  //toggle 'show' class on mobile menu
  mobileMenu.classList.toggle("show");
};

// Function to toggle the dropdown menu
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const icon = document.getElementById('icon');
  
    // Toggle the display of the dropdown content
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
      
    } else {
      dropdownContent.style.display = 'block';
      icon.style.transform = 'rotate(180deg)';
    }
  }
  
  // Function to handle the apply button click
  function applyFilters() {
    // Collect selected filters
    const selectedFilters = {
      ratings: [],
      genres: []
    };
  
    document.querySelectorAll('.dropdown-content input[type="checkbox"]:checked').forEach(checkbox => {
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
  }
  
  // Event listeners
  document.querySelector('.dropdown-text').addEventListener('click', toggleDropdown);
  document.querySelector('.apply-btn').addEventListener('click', applyFilters);
  
  