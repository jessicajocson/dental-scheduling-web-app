const db = require("../config/database");

class Service {
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM Services", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = Service;

