exports.up = function (knex) {
    return knex.schema.alterTable('patient', function (table) {
        table.dropColumn('next_kin_name');
        table.dropColumn('next_kin_relation');
        table.dropColumn('date_birth');
        table.dropColumn('place_birth');
        table.dropColumn('insurance_type');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('patient', table => {});
};
