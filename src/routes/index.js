const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');
const deviationController = require('../controllers/deviationController');

router.get('/stats', statsController.getStats);
router.get('/deviation', deviationController.getDeviation);

module.exports = router;