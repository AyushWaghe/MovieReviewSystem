import React, { useState } from 'react';
import './popupReviewCard.css'; // Import your CSS file

const PopupReviewCard = ({ onClose }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    // Function to handle rating change
    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    // Function to handle review text change
    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle submission logic here (e.g., send data to server, update state, etc.)
        // For demo, just log the data
        console.log(`Rating: ${rating}, Review: ${review}`);

        // Close the popup after submission
        onClose();
    };

    return (
        <div className="review-popup">
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h3>Rate and Review</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="rating">Rating :</label>
                    <select id="rating" name="rating" value={rating} onChange={handleRatingChange} required>
                        <option value="1">1 star</option>
                        <option value="2">2 stars</option>
                        <option value="3">3 stars</option>
                        <option value="4">4 stars</option>
                        <option value="5">5 stars</option>
                    </select>
                    <label htmlFor="review">Review :</label>
                    <textarea id="review" name="review" rows="4" value={review} onChange={handleReviewChange} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PopupReviewCard;
