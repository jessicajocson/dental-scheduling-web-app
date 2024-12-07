const db = require("../config/database");

class Dentist{
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM Doctor", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = Dentist;

