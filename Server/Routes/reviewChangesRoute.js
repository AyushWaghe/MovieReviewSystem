const express = require('express');
// const filterMovies = require('../Controllers/filterMovies');
const createReviewController =require('../Controllers/createReviewController');
const deleteReviewController = require('../Controllers/deleteReviewController');
const readReviewController = require('../Controllers/readReviewController'); 
const updateReviewController =require('../Controllers/updateReviewController');
const router=express.Router();

router.post('/postReview', createReviewController);
router.get('/fetchReview', readReviewController);
router.post('/updateReview', updateReviewController);
router.delete('deleteReview', deleteReviewController);

module.exports = router;