const emptyTestDatabase = require('./empty-test-db');

module.exports = async knex => {
    await emptyTestDatabase(knex);
    await knex.migrate.rollback(null, true);
    console.log('TEAR DOWN');
    return knex;
};
