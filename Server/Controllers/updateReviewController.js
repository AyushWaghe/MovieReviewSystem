const Review = require('../models/reviewSchema');
const Movie = require('../models/movieSchema');
const UserProfile = require('../models/userProfileSchema');

const updateReview = async (req, res) => {
    const { reviewId, review, rating } = req.body;
    const { userId } = req.params;
  
    try {
      // Fetch the user profile
      const userProfile = await UserProfile.findOne({ uid: userId });
  
      // Find the review to be updated
      const reviewToUpdate = await Review.findById(reviewId);
  
      // Update the review
      reviewToUpdate.review = review;
      reviewToUpdate.rating = rating;
      await reviewToUpdate.save();
  
      // Update the review in the user profile
      const updatedUserProfile = await UserProfile.findOneAndUpdate(
        { uid: userId },
        { $set: { 'MovieReviewIds.$[elem].review': review, 'MovieReviewIds.$[elem].rating': rating } },
        { arrayFilters: [{ 'elem._id': reviewId }], new: true }
      );
  
      res.status(200).json({ message: 'Review updated successfully', review: updatedUserProfile.MovieReviewIds.find(r => r._id.toString() === reviewId) });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update review', error: error.message });
    }
  };
  
  module.exports = { updateReview };
  
