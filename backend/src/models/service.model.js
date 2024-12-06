const db = require("../config/database");

class Service {
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM services", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = Service;

