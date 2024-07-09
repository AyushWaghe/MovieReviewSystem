const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
<<<<<<< HEAD
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    poster: { type: String, required: true },
    summary: { type: String, required: true },
    duration: { type: String, required: true },
    stars: { type: Number, required: true },
    release_year: { type: Number, required: true },
    language: { type: String, required: true },
    genre: { type: String, required: true },
    reviewids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }], // Array of ObjectId
    cast: { type: [String], required: true },
=======
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  poster: { type: String, required: true },
  summary: { type: String, required: true },
  duration: { type: String, required: true },
  stars: { type: Number, required: true },
  release_year: { type: Number, required: true },
  language: { type: String, required: true },
  genre: { type: String, required: true },
  reviewids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }], // Array of ObjectId
  cast: { type: [String], required: true },
>>>>>>> e56c1622826c0f0c70047e43e129fe6d9e18dbb0
});

module.exports = mongoose.model('Movie', MovieSchema);
