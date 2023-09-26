const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { createJobType, allJobsType } = require('../controllers/jobTypeController');
const router = express.Router();

//job type routes
// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)
// /api/type/jobs
router.get('/type/jobs', allJobsType)


module.exports = router;