exports.up = function (knex) {
    return knex.schema.alterTable('record', function (table) {
        table.dropColumn('diagnosis');
        table.dropColumn('prescribed_drugs');
        table.dropColumn('symptoms');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('record', table => {});
};
