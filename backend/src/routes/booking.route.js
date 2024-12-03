const express = require('express');
const { getDentists, bookAppointment } = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/dentists', getDentists); // Fetch dentists and availability
router.post('/appointments', authMiddleware, bookAppointment); // Book an appointment

module.exports = router;