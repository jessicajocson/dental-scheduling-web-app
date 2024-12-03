const Appointment = require('../models/Appointment');

exports.getUserAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId });
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.appointmentId, req.body, { new: true });
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.appointmentId);
    res.status(200).json({ success: true, message: "Appointment canceled." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
