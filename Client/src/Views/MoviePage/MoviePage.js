import React, { useState } from 'react';
import PopupReviewCard from '../../components/PopupReviewCard/popupReviewCard';
import "./MoviePage.css"
import Navbar from '../../components/NavBar/navBar'
import ReviewCard from '../../components/reviewCard/reviewCard';

import '@fortawesome/fontawesome-free/css/all.min.css'; // to get special icons from fontawesome icons



const MoviePage = () => {

    const [showPopup, setShowPopup] = useState(false);

    // Function to toggle popup visibility
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    // Function to handle closing popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className="MasterContainerMoviePage">
                <div className="MoviePageNavBarContainer">
                    <Navbar />
                </div>
                <div className="DarkOverlay">

                    <div className="ImageAndRatingContainer">
                        <div className="ImageDivContainer">
                            <img src="./images/jawan.jpg" style={{ height: "400px", width: "350px", borderRadius: "3%" }} />
                        </div>

                        <div className="ImageDivContentContainer">
                            <h1>Jawan</h1>

                            <div className="RatingDisplayContainer">
                                4.2 (55 Votes)
                            </div>

                            <div className="LanguagesContainer">
                                Hindi,English
                            </div>

                            <div className="MinorDetailsContainer">
                                Horror,Thriller - 2024
                            </div>

                            <button id="rate-now-btn" className="RateNowButton" onClick={togglePopup}>Rate Now!</button>
                            {showPopup && <PopupReviewCard onClose={handleClosePopup} />}
                        </div>
                    </div>


                </div>

            </div>
            <div className="AboutMovieSection">
                <h1>About movie</h1>    
            </div>

            <div>
                <ReviewCard
                name="John Doe"
                reviewText="The movie was fantastic! The storyline was gripping and the performances were outstanding."
                ratingValue={4}
            />
            </div>
        </div>
    )
}

export default MoviePage;
