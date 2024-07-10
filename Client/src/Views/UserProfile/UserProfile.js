import React from 'react';
import './UserProfile.css';
import Navbar from '../../components/NavBar/navBar';
import UserReviewCard from '../../components/reviewCard/userReviewCard';

const UserProfile = () => {
  return (
    <div className="profile-container">
        <div className="DarkOverlay">
      <div className="NavBarContainer">
        <Navbar/>
      </div>
      <div className="profile-header">
        <div className="profile-image">
          <img src="https://via.placeholder.com/80" alt="User Icon" />
        </div>
        <div className="profile-info">
          <h1>Alexander Fernandez</h1>
          <p>userid:1720441056832433000</p>
          <p>alhandro345@gmail.com</p>
        </div>
      </div>
      <div className="profile-activity">
        <h1>Your Activity</h1>
        <div>
                <UserReviewCard
                name="John Doe"
                reviewText="The movie was fantastic! The storyline was gripping and the performances were outstanding."
                ratingValue={4}
                />
        </div>
      </div>

    </div>
    </div>
  );
};

export default UserProfile;
