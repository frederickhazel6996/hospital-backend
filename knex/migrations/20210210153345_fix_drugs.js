exports.up = function (knex) {
    return knex.schema.alterTable('drug', function (table) {
        table.string('type_drug_1');
        table.string('type_drug_2');
        table.string('dosage');
        table.string('manufacturer');
        table.string('uses');
        table.string('warning');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('drug', table => {});
};
