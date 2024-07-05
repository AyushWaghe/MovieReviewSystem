const UserProfile = require('../models/userProfileSchema');
const Review = require('../models/reviewSchema');
const Movie = require('../models/movieSchema');

exports.getUserProfile = async (req, res) => {
    const { userId } = req.params;

    try {
        const userProfile = await UserProfile.findOne({ uid: userId }).populate('MovieReviewIds');

        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        const reviews = await Review.find({ _id: { $in: userProfile.MovieReviewIds } }).populate('movieReviewId');

        res.status(200).json({
            userProfile,
            reviews
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
