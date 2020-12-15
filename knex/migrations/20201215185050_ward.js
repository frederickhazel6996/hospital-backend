exports.up = function (knex) {
    return knex.schema.createTable('ward', function (table) {
        table.increments();
        table.string('name', 255).notNullable();
        table.integer('number_beds').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('ward');
};
