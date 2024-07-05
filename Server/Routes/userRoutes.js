const express = require('express');
const router = express.Router();
const readReviewController = require('../controllers/readReviewController');

router.get('/profile/:userId', readReviewController.fetchReview);

module.exports = router;

