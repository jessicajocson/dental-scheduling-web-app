const { query } = require('../db');

const Client = {
    create: async (data) => {
        const { first_name, last_name, email, phone_number} = data;
        const result = await query(
            `INSERT INTO clients (first_name, last_name, email, phone_number)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [first_name, last_name, email, phone_number]
        );
        return result.rows[0];
    },
    findAll: async () => {
        const result = await query(`SELECT * FROM clients`);
        return result.rows;
    },
    // Add more methods as needed (findById, update, delete)
};

module.exports = Client;
