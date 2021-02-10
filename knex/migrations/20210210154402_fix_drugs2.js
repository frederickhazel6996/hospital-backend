exports.up = function (knex) {
    return knex.schema.alterTable('drug', function (table) {
        table.string('cost');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('drug', table => {});
};
