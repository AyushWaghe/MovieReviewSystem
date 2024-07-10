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

    // Function to scroll reviews
    const scrollReviews = (direction) => {
        const container = document.querySelector('.reviews-scroll-container');
        const scrollAmount = direction === 'left' ? -420 : 420;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
                            <img src="./images/jawan.jpg" style={{ height: "400px", width: "350px", borderRadius: "3%" }} alt="Movie Poster"/>
                        </div>
                        <div className="ImageDivContentContainer">
                            <h1>Jawan</h1>
                            <div className="RatingDisplayContainer">
                                4.2 (55 Votes)
                            </div>
                            <div className="LanguagesContainer">
                                Hindi, English
                            </div>
                            <div className="MinorDetailsContainer">
                                Horror, Thriller - 2024
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
            <div className="ReviewsSection">
                <h1>Reviews</h1>
                <div className="reviews-container">
                    <button className="scroll-button left" onClick={() => scrollReviews('left')}>&#9664;</button>
                    <div className="reviews-scroll-container">
                        <ReviewCard
                            name="John Doe"
                            reviewText="The storyline was gripping and the performances were outstanding."
                            ratingValue={4}
                        />
                        <ReviewCard
                            name="Jane Doe"
                            reviewText="A thrilling experience from start to finish. Highly recommended!"
                            ratingValue={5}
                        />
                        <ReviewCard
                            name="Alice"
                            reviewText="It was okay, some parts were really good but others were lacking."
                            ratingValue={3}
                        />
                        <ReviewCard
                            name="Bob"
                            reviewText="Loved the cinematography and the direction. Worth watching!"
                            ratingValue={4}
                        />
                        <ReviewCard
                            name="Charlie"
                            reviewText="An average movie, could have been better."
                            ratingValue={2}
                        />
                    </div>
                    <button className="scroll-button right" onClick={()=>scrollReviews('right')}>&#9654;</button>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;
