const { Pool } = require('pg');

const pool = new Pool({
  user: 'pearl',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

module.exports = pool;
