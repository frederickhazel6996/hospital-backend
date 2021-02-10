exports.up = function (knex) {
    return knex.schema.alterTable('drug', function (table) {
        table.dropColumn('uses');
        table.dropColumn('warning');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('drug', table => {});
};
