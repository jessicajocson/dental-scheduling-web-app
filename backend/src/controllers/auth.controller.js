const AuthService = require("../services/auth.service");

class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      res.json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  static async register(req, res) {
    try {
      console.log(req.body);
      const { full_name, phone, email, password } = req.body;
      const result = await AuthService.register(
        full_name,
        phone,
        email,
        password
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
