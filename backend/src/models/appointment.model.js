const db = require('../db');

const Appointment = {
    create: async (userId, dentistId, serviceId, appointmentDate, appointmentTime) => {
        const query = `
            INSERT INTO appointments (user_id, dentist_id, service_id, appointment_date, appointment_time)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [userId, dentistId, serviceId, appointmentDate, appointmentTime];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    getByUserId: async (userId) => {
        const query = `
            SELECT a.*, d.name AS dentist_name, s.name AS service_name
            FROM appointments a
            JOIN dentists d ON a.dentist_id = d.id
            JOIN services s ON a.service_id = s.id
            WHERE a.user_id = $1;
        `;
        const result = await db.query(query, [userId]);
        return result.rows;
    },

    cancel: async (id) => {
        const query = `DELETE FROM appointments WHERE id = $1 RETURNING *;`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    },
};

module.exports = Appointment;
