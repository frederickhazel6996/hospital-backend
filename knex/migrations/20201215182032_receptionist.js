exports.up = function (knex) {
    return knex.schema.createTable('receptionist', function (table) {
        table.increments();
        table.string('name', 255).notNullable();
        table.string('password', 255).notNullable();
        table.string('receptionist_id', 255).unique();
        table.string('username').unique();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('receptionist');
};
