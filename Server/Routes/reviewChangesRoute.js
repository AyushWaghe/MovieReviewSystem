const express = require('express');
// const filterMovies = require('../Controllers/filterMovies');
const createReviewController =require('../Controllers/createReviewController');
const deleteReviewController = require('../Controllers/deleteReviewController');
const readReviewController = require('../Controllers/readReviewController'); 
const updateReviewController =require('../Controllers/updateReviewController');
const router = express.Router();

router.post('/postReview', createReviewController.createReview);
router.get('/fetchReview', readReviewController.fetchReview);
router.put('/updateReview', updateReviewController.updateReview);
router.delete('/deleteReview', deleteReviewController.deleteReview);


module.exports = router;
