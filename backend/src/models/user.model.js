const db = require('../db');

const Client = {
    create: async (name, email, passwordHash, phone) => {
        const query = `
            INSERT INTO Client (full_name, email, password, phone)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [name, email, passwordHash, phone];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    findByEmail: async (email) => {
        const query = `SELECT * FROM Client WHERE email = $1;`;
        const result = await db.query(query, [email]);
        return result.rows[0];
    },

    findById: async (id) => {
        const query = `SELECT * FROM Client WHERE id = $1;`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    },
};

module.exports = Client;
