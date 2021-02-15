exports.up = function (knex) {
    return knex.schema.alterTable('vitals', function (table) {
        table.dropColumn('patient_id');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('vitals', table => {});
};
