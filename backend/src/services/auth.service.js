const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Client = require("../models/client.model");

class AuthService {
  // services/authService.js
  static async login(email, password) {
    const user = await Client.findByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { token, user };
  }

  static async register(full_name, phone, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    let client = { full_name, phone, email, password: hashedPassword };
    const user = await Client.create(client);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    client["id"] = user.insertId;
    return { message: "User registered successfully", token, user: client };
  }

  static authenticateToken(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(403).json({ error: "No token provided" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log("user", user);
      if (err) {
        console.error("Token verification error:", err);
        return res.status(403).json({ error: "Failed to authenticate token" });
      }

      req.user = user;
      next();
    });
  }
}

module.exports = AuthService;
