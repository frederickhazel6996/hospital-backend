exports.up = function (knex) {
    return knex.schema.alterTable('patient', function (table) {
        table.dropColumn('password');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('patient', table => {});
};
