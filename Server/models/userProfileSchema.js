const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  uid: { type: Number, required: true, unique: true },

  movieReviewIds: [{
    movieId: { type: Number, required: true },
    reviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
  }]
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);
