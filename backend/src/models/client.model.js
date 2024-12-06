const db = require("../config/database");

class Client {
  static async findByEmail(email) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM user WHERE email = ?",
        [email],
        (err, results) => {
          if (err) reject(err);
          resolve(results[0]);
        }
      );
    });
  }

  static async create(client) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO user SET ?", client, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = Client;
