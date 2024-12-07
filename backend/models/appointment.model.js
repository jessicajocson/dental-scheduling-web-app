const { response } = require("express");
const db = require("../config/database");

class Appointment {
  static async findAll(doctor_fullname, appointment_date, appointment_time) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT Appointment.*, Schedule.schedule_time AS schedule_time, Schedule.schedule_day AS schedule_day, Doctor.full_name AS doctor_name, Service.name AS service_name, Service.value AS service_value
         FROM Appointment
         JOIN Schedule ON Appointment.schedule_id = Schedule.id
         JOIN Doctor ON Schedule.doctor_id = Doctor.id
         JOIN Service ON Appointment.service_id = Service.id
         WHERE Appointment.status <> 'Cancelled'
         AND Doctor.full_name = ?
         AND DATE(Appointment.appointment_date) = DATE(?)`,
        [doctor_fullname, appointment_date],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }

  static async create(appointment) {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO Appointment (schedule_id, client_id, service_id, appointment_date, status, remarks)
        VALUES (?, ?, ?, ?, ?, ?)`,
        appointment,
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  static async findByClient(client_id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT Appointment.id AS appointment_id,
                Appointment.appointment_date,
                Service.name AS service_name,
                Doctor.full_name AS doctor_name,
                Appointment.status,
                Appointment.remarks
        FROM Appointment
        JOIN Client ON Appointment.Client_id = Client.id
        JOIN Schedule ON Appointment.Schedule_id = Schedule.id
        JOIN Doctor ON Schedule.Doctor_id = Doctor.id
        JOIN Service ON Appointment.Service_id = Service.id
        WHERE Client.id = ?`,
        [client_id],
        (err, results) => {
          if (err) reject(err);
          console.log("results", results);
          resolve(results);
        }
      );
    });
  }

  static async update(id, data) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE Appointment SET ? WHERE id = ?",
        [data, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  static async deleteById(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM Appointment WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = Appointment;