const config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'se-l6',
    pool: { min: 0, max: 10}
  }
}

module.exports = require('knex')(config);
