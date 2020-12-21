//Empty the test database. Does not rollback database.
module.exports = async function (knex) {
    try {
        // throw "simple error"
        const tables = [
            'vitals',
            'record',
            'ward',
            'admin',
            'doctor',
            'drug',
            'patient',
            'receptionist'
        ];

        for (let table of tables) {
            if (await knex.schema.hasTable(table)) {
                await knex(table).del();
            }
        }
    } catch (err) {
        console.log('caught error in empty-test-database');
        throw err;
    }
};
