const db = require('../database/conn');


exports.createUser = (req, res) => {
    const data = req.body;
    // pool.query('INSERT into ')
}

exports.getUser = (req, res) => {
    db.query('SELECT * FROM users ORDER BY id ASC', (error, value) => {
        if (error) {
            throw error;
        }
        res.status(201).json(
            value.rows
        );
    });
};

exports.getAUserById = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    db.query('SELECT * FROM users WHERE ID = $1', [id], (error, value) => {
        if (error) {
            throw error;
        }
        res.status(201).json(
            value.rows
        );
    });
};