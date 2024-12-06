const express = require("express");
const BookingController = require("../controllers/booking.controller");
const AuthService = require("../services/auth.service");

const router = express.Router();

router.get("/schedules", BookingController.getSchedules);
router.get("/appointments", BookingController.getAppointments);
router.post(
  "/appointments",
  AuthService.authenticateToken,
  BookingController.createAppointment
);

module.exports = router;