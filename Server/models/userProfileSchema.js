const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  uid: { type: Number, required: true, unique: true },
<<<<<<< HEAD
  movieReviewIds:[{
=======
  movieReviewIds: [{
>>>>>>> e56c1622826c0f0c70047e43e129fe6d9e18dbb0
    movieId: { type: Number, required: true },
    reviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
  }]
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);
