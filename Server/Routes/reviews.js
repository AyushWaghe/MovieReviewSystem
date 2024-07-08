const express = require('express');
const router = express.Router();
const createReviewController = require('../Controllers/createReviewController');
const updateReviewController = require('../Controllers/updateReviewController');
const readReviewController = require('../Controllers/readReviewController');
const deleteReviewController=require('../Controllers/deleteReviewController');


router.post('/create', createReviewController.createReview);
router.put('/update/:userId', updateReviewController.updateReview);
router.delete('/delete/:reviewId',deleteReviewController.deleteReview);



module.exports = router;
