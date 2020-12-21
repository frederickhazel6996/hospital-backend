exports.up = function (knex) {
    return knex.schema.alterTable('record', function (table) {
        table.string('record_id');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('record', table => {});
};
