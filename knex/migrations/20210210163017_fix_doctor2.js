exports.up = function (knex) {
    return knex.schema.alterTable('doctor', function (table) {
        table.string('phone_number');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('doctor', table => {});
};
