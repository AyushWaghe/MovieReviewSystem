const Review = require('../models/reviewSchema');
const User = require('../models/userProfileSchema');
const Movie = require('../models/movieSchema');

const deleteReview = async (req, res) => {
  try {
    const { reviewId, userId } = req.body;

    // Delete the review from the Review model
    await Review.findByIdAndDelete(reviewId);

    // Remove the review reference from the User model
    const user = await User.findById(userId);
    user.reviews = user.reviews.filter(review => review.toString() !== reviewId);
    await user.save();

    // Remove the review reference from the Movie model
    const movie = await Movie.findOne({ 'reviews.id': reviewId });
    if (movie) {
      movie.reviews = movie.reviews.filter(review => review.id.toString() !== reviewId);
      await movie.save();
    }

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteReview };
