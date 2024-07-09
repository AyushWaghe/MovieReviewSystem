import React from 'react';
import './userReviewCard.css'; // Import your CSS file

const UserReviewCard = ({ name, reviewText, ratingValue }) => {
    const maxRating = 5;

    // Function to generate star icons dynamically
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <span key={i} className={i <= ratingValue ? 'fas fa-star' : 'far fa-star'}></span>
            );
        }
        return stars;
    };

    return (
        <div className="review-card">
            <div className="profile-pic">
                <i className="fas fa-user-circle"></i>
                <h2>{name}</h2>
            </div>
            <div className="review-content">
                <p className="review-text">{reviewText}</p>
                <div className="rating">
                    {renderStars()}
                    <span className="rating-text">{`${ratingValue}/${maxRating}`}</span>
                </div>
            </div>
            <div className="actions">
                <div className="action-item">
                    <i className="fas fa-edit action-icon"></i>
                    <span className="action-text">Edit</span>
                </div>
                <div className="action-item">
                    <i className="fas fa-trash-alt action-icon"></i>
                    <span className="action-text">Delete</span>
                </div>
            </div>
        </div>
    );
};

export default UserReviewCard;

