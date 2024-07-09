const Review = require('../models/reviewSchema');
const Movie = require('../models/movieSchema');
const UserProfile = require('../models/userProfileSchema');
const mongoose = require('mongoose'); 

function generateId() {
    const timestamp = new Date().getTime();
    const randomComponent = Math.floor(Math.random() * 1000000);
    const uniqueRandomNumber = `${timestamp}${randomComponent}`;
    return uniqueRandomNumber;
}

const createReview = async (req, res) => {
    const { review, rating, movieReviewId } = req.body;

    const reviewId = generateId(); // Generate a unique reviewId
    const userId = generateId(); // Generate a unique userId for testing

    try {
        const newReview = await Review.create({ review, rating, reviewId, movieReviewId });

        // Convert movieReviewId to ObjectId
        const movieId = new mongoose.Types.ObjectId(movieReviewId);

        await Movie.findByIdAndUpdate(movieId, {
            $push: { reviewids: newReview._id }
        });

        await UserProfile.findOneAndUpdate(
            { uid: userId },
            { $push: { MovieReviewIds: newReview._id } },
            { upsert: true } // Create the user profile if it doesn't exist
        );

        res.status(201).json({ message: 'Review created successfully', review: newReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create review', error: error.message });
    }
};

module.exports = { createReview };
