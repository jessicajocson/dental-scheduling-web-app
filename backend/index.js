const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/home', require('./routes/homeRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/booking', require('./routes/bookingRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Error Handling
app.use(require('./middlewares/errorHandler'));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
