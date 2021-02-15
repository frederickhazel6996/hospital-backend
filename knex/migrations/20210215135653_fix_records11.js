exports.up = function (knex) {
    return knex.schema.alterTable('record', function (table) {
        table.string('diagnosis', 10000);
        table.string('prescribed_drugs', 10000);
        table.string('symptoms', 10000);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('record', table => {});
};
