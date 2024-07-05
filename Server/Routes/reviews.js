const express = require('express');
const router = express.Router();
const createReviewController = require('../Controllers/createReviewController');

router.post('/create', createReviewController.createReview);

module.exports = router;
