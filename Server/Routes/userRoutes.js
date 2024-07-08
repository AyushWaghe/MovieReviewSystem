const express = require('express');
const router = express.Router();
const readReviewController = require('../Controllers/readReviewController');

router.get('/profile/:userId', readReviewController.fetchUserProfile);

module.exports = router;
