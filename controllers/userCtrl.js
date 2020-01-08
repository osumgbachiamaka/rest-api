const db = require('../database/conn');


exports.createUser = (req, res) => {
    const data = req.body;
    // pool.query('INSERT into ')
}

exports.getUser = (req, res) => {
    pool.query('SELECT * FROM user ORDER BY id ASC', (error, value) => {
        if (error) {
            throw error;
        }
        res.status(201).json(
            value.rows,
        );
    });
};