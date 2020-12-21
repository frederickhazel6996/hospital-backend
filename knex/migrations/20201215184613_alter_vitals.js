exports.up = function (knex) {
    return knex.schema.alterTable('vitals', function (table) {
        table.dropColumn('stock');
    });
};

exports.down = function (knex) {};
