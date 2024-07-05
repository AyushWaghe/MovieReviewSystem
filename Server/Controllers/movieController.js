const Movie = require('../models/movieSchema');
const Review = require('../models/reviewSchema');

exports.getMovieDetails = async (req, res) => {
    const { movieId } = req.params;

    try {
        const movie = await Movie.findById(movieId).populate('reviewids');

        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        const reviews = await Review.find({ movieReviewId: movieId });

        res.status(200).json({
            movie,
            reviews
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
