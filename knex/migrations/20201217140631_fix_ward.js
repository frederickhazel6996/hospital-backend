exports.up = function (knex) {
    return knex.schema.alterTable('ward', function (table) {
        table.string('ward_id');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('ward');
};
