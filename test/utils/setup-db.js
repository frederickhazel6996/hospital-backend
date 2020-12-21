//Setup the test database with seeds from specified seed directory.
const emptyTestDatabase = require('./empty-test-db');

module.exports = async knex => {
    await emptyTestDatabase(knex);
    await knex.migrate.rollback();
    await knex.migrate.latest();

    return knex;
};
