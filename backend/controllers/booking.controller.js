const Schedule = require("../models/schedule.model");
const Appointment = require("../models/appointment.model");

class BookingController {
  static async getSchedules(req, res) {
    try {
      const schedule_day = req.headers["schedule_day"];
      const schedules = await Schedule.findByDay(schedule_day);
      res.json({ schedules });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }

  static async getAppointments(req, res) {
    try {
      const doctor_fullname = req.headers["doctor_fullname"];
      const appointment_date = req.headers["appointment_date"];
      const appointments = await Appointment.findAll(
        doctor_fullname,
        appointment_date
      );
      console.log(appointments);
      res.json({ appointments });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }

  static async createAppointment(req, res) {
    try {
      const { client_id, schedule_id, service_id, remarks, appointment_date } =
        req.body;

      const appointment = [
        schedule_id,
        client_id,
        service_id,
        appointment_date,
        "Booked",
        remarks,
      ];
      console.log(appointment);
      await Appointment.create(appointment);

      res.status(201).json({ message: "Appointment booked successfully" });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ error: "Database error" });
    }
  }
}

module.exports = BookingController;
