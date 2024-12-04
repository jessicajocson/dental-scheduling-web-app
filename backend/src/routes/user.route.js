const express = require('express');
const { getUserAppointments, updateAppointment, cancelAppointment } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:userId/appointments', authMiddleware, getUserAppointments);
router.put('/appointments/:appointmentId', authMiddleware, updateAppointment);
router.delete('/appointments/:appointmentId', authMiddleware, cancelAppointment);

module.exports = router;
