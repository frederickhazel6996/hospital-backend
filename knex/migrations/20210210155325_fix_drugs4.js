exports.up = function (knex) {
    return knex.schema.alterTable('drug', function (table) {
        table.string('uses', 10000);
        table.string('warning', 10000);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('drug', table => {});
};
