const UserProfile = require('../models/userProfileSchema');
const Review = require('../models/reviewSchema');
const Movie = require('../models/movieSchema');

const fetchReview = async (req, res) => {
    const { userId, movieId } = req.params;

    try {
        if (userId) {
            // Fetch user profile and their reviews
            const userProfile = await UserProfile.findOne({ uid: userId }).populate('MovieReviewIds');

            if (!userProfile) {
                return res.status(404).json({ message: 'User profile not found' });
            }

            const reviews = await Review.find({ _id: { $in: userProfile.MovieReviewIds } }).populate('movieReviewId');

            return res.status(200).json({
                userProfile,
                reviews
            });
        }

        if (movieId) {
            // Fetch movie details and reviews for the movie
            const movie = await Movie.findById(movieId).populate('reviewids');

            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }

            const reviews = await Review.find({ movieReviewId: movieId });

            return res.status(200).json({
                movie,
                reviews
            });
        }

        res.status(400).json({ message: 'Invalid request parameters' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { fetchReview };
