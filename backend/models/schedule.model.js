const db = require("../config/database");

class Schedule {
  static async findByDay(schedule_day) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT Schedule.*, Doctor.full_name AS doctor_name
         FROM Schedule
         JOIN Doctor ON Schedule.doctor_id = Doctor.id
         WHERE Schedule.schedule_day = ?`,
        [schedule_day],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }
}

module.exports = Schedule;
