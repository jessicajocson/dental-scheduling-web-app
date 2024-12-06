const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/auth.route");
const bookingRoutes = require("./routes/booking.route");
const homeRoutes = require("./routes/home.route");
const userRoutes = require("./routes/user.route");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/booking", bookingRoutes);
app.use("/home", homeRoutes);
app.use("/user", userRoutes);

// Error Handling
app.use(require('./middlewares/errorhandler'));

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
