exports.up = function (knex) {
    return knex.schema.createTable('doctor', function (table) {
        table.increments();
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string('other_name', 255).notNullable();
        table.string('password', 255).notNullable();
        table.string('doctor_id', 255).unique();
        table.string('username').unique();
        table.string('speciality');
        table.integer('age');
        table.string('sex');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('doctor');
};
