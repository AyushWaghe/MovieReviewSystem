const express = require('express');
const router = express.Router();
const createReviewController = require('../Controllers/createReviewController');
const updateReviewController = require('../Controllers/updateReviewController');
const readReviewController = require('../Controllers/readReviewController')

router.post('/create', createReviewController.createReview);
router.put('/update/:userId', updateReviewController.updateReview);

module.exports = router;
