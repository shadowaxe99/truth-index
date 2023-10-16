const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// Profile routes
router.post('/profile', controllers.createProfile);
router.get('/profile/:id', controllers.getProfile);
router.put('/profile/:id', controllers.updateProfile);
router.delete('/profile/:id', controllers.deleteProfile);

// Public stance routes
router.post('/publicStance', controllers.indexPublicStance);
router.get('/publicStance/:id', controllers.getPublicStance);
router.put('/publicStance/:id', controllers.updatePublicStance);
router.delete('/publicStance/:id', controllers.deletePublicStance);

// Review routes
router.post('/review', controllers.submitReview);
router.get('/review/:id', controllers.getReview);
router.put('/review/:id', controllers.updateReview);
router.delete('/review/:id', controllers.deleteReview);

// Report routes
router.post('/report', controllers.reportContent);
router.get('/report/:id', controllers.getReport);
router.put('/report/:id', controllers.updateReport);
router.delete('/report/:id', controllers.deleteReport);

module.exports = router;