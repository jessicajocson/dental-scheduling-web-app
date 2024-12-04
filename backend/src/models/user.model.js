const db = require('../db');

const User = {
    create: async (name, email, passwordHash, phone) => {
        const query = `
            INSERT INTO users (name, email, password_hash, phone)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [name, email, passwordHash, phone];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    findByEmail: async (email) => {
        const query = `SELECT * FROM users WHERE email = $1;`;
        const result = await db.query(query, [email]);
        return result.rows[0];
    },

    findById: async (id) => {
        const query = `SELECT * FROM users WHERE id = $1;`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    },
};

module.exports = User;
