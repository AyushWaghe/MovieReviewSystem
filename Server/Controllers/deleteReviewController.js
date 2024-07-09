const Review = require("../models/reviewSchema");
const Movie = require("../models/movieSchema");
const UserProfile = require("../models/userProfileSchema");

const deleteReview = async (req, res) => {
  try {
    const { userId, movieId, reviewId } = req.body;

    // Delete the review
    const deletedReview = await Review.findOneAndDelete({ reviewId: reviewId });

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Update the movie's review IDs
    const movie = await Movie.findOne({ id: movieId });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Remove the deleted review ID from the movie's reviewids array
    const updatedReviewIds = movie.reviewids.filter((id) => id !== reviewId);
    await Movie.findOneAndUpdate(
      { id: movieId },
      { $set: { reviewids: updatedReviewIds } },
      { new: true }
    );

    // Update the user's review count
    const userProfile = await UserProfile.findOne({ userId: userId });
    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    const updatedReviewCount = userProfile.reviewCount - 1;
    await UserProfile.findOneAndUpdate(
      { userId: userId },
      { $set: { reviewCount: updatedReviewCount } },
      { new: true }
    );

    return res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { deleteReview };
