const Dentist = require('../models/dentist.model');
const Appointment = require('../models/appointment.model');

exports.getDentists = async (req, res) => {
  try {
    const dentists = await Dentist.find();
    res.status(200).json({ success: true, data: dentists });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.bookAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
