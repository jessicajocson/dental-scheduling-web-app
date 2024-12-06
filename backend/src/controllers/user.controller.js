const Appointment = require("../models/appointment.model");

class UserController {
  static async getUserAppointments(req, res) {
    try {
      console.log("headers", req.headers);
      const client_id = req.headers["id"];
      console.log("client_id", client_id);
      const appointments = await Appointment.findByClient(client_id);
      const formattedAppointments = { appointments };
      res.json(formattedAppointments);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }

  static async updateAppointment(req, res) {
    try {
      const { id } = req.headers["id"];
      const { status, remarks } = req.body;
      const appointmentResponse = await Appointment.update(id, {
        status,
        remarks,
      });
      res.json({
        message: "Appointment updated successfully",
        appointmentResponse,
      });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }

  static async deleteAppointment(req, res) {
    try {
      const { id } = req.params; // Appointment ID from URL parameter
      await Appointment.deleteById(id);
      res.json({ message: "Appointment deleted successfully", id });
    } catch (error) {
      console.error("Delete appointment error:", error);
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = UserController;
