const db = require('../db');

const Service = {
    getAll: async () => {
        const query = `SELECT * FROM services;`;
        const result = await db.query(query);
        return result.rows;
    },
};

module.exports = Service;
