const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))


// A test route
app.get('/booking/appointments', (req, res) => {
    res.json({ message: "Appointments data here" });
});

app.post('/booking/appointments', (req, res) => {
    res.status(200).json({ message: "Appointment booked" });
});


const authRoutes = require("./routes/auth.route");
const bookingRoutes = require("./routes/booking.route");
const homeRoutes = require("./routes/home.route");
const userRoutes = require("./routes/user.route");



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // If using cookies or credentials
    next();
});

app.use("/auth", authRoutes)
app.use("/booking", bookingRoutes);
app.use("/home", homeRoutes);
app.use("/user", userRoutes);

// Error Handling
app.use(require('./middleware/errorhandler'));

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
