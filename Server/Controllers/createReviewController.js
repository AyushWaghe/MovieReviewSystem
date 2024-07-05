const Review = require('../models/reviewSchema');
const Movie = require('../models/movieSchema');
const UserProfile = require('../models/userProfileSchema');

const createReview = async (req, res) => {
    const { review, rating, movieReviewId, userId } = req.body;

    try {
        const newReview = await Review.create({ review, rating, movieReviewId });

        await Movie.findByIdAndUpdate(movieReviewId, {
            $push: { reviewids: newReview._id }
        });

        await UserProfile.findOneAndUpdate(
            { uid: userId },
            { $push: { MovieReviewIds: newReview._id } }
        );

        res.status(201).json({ message: 'Review created successfully', review: newReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create review', error: error.message });
    }
};

module.exports = { createReview };
