exports.up = function (knex) {
    return knex.schema.createTable('drug', function (table) {
        table.increments();
        table.string('name', 255).notNullable();
        table.integer('stock').notNullable();
        table.string('drug_id', 255).unique();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('drug');
};
