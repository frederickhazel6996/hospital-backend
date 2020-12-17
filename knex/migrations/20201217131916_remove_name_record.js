exports.up = function (knex) {
    return knex.schema.alterTable('record', function (table) {
        table.dropColumn('name');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('record');
};
