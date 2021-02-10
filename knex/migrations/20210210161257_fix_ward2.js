exports.up = function (knex) {
    return knex.schema.alterTable('ward', function (table) {
        table.string('gender');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('ward', table => {});
};
