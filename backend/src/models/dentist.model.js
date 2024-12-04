const db = require('../db');

const Dentist = {
    getAll: async () => {
        const query = `SELECT * FROM dentists;`;
        const result = await db.query(query);
        return result.rows;
    },
};

module.exports = Dentist;
