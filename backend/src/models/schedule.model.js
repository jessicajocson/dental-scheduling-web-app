const { query } = require('../db');

const Schedule = {
    create: async (data) => {
        const { client_id, dentist_id, appointment_date, appointment_time, service_type, status } = data;
        const result = await query(
            `INSERT INTO schedules (client_id, dentist_id, appointment_date, appointment_time, service_type, status)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [client_id, dentist_id, appointment_date, appointment_time, service_type, status || 'Scheduled']
        );
        return result.rows[0];
    },
    findByClientId: async (client_id) => {
        const result = await query(
            `SELECT * FROM schedules WHERE client_id = $1`,
            [client_id]
        );
        return result.rows;
    },
    // Add more methods as needed (update, cancel, findByDentistId)
};

module.exports = Schedule;
