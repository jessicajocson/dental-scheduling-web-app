const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/home', require('./routes/home.route'));
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/booking', require('./routes/booking.route'));
app.use('/api/users', require('./routes/user.route'));

// Error Handling
app.use(require('./middlewares/errorhandler'));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
