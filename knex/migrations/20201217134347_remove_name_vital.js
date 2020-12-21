exports.up = function (knex) {
    return knex.schema.alterTable('vitals', function (table) {
        table.dropColumn('name');
    });
};

exports.down = function (knex) {};
