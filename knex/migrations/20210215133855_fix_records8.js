exports.up = function (knex) {
    return knex.schema.alterTable('record', function (table) {
        table.string('admin_id').references('admin.admin_id');
        table.dropColumn('record_id');
        table.dropColumn('doctor_id');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('record', table => {});
};
