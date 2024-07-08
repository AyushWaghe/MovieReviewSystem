const express = require('express');
const router = express.Router();
const readReviewController = require('../Controllers/readReviewController');

router.get('/:movieId', readReviewController.fetchReview);

module.exports = router;
