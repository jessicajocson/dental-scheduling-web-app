const db = require("../config/db");

class Dentist{
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM dentists", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = Dentist;

