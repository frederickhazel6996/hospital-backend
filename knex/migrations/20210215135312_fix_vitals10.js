exports.up = function (knex) {
    return knex.schema.alterTable('vitals', function (table) {
        table.string('record_id').references('record.record_id');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('vitals', table => {});
};
