exports.up = function (knex) {
    return knex.schema.alterTable('patient', function (table) {
        table.dropColumn('username');
    });
};

exports.down = function (knex) {};
