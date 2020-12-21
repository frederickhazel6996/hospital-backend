exports.up = function (knex) {
    return knex.schema.alterTable('vitals', function (table) {
        table.dropColumn('weight');
        table.dropColumn('height');
        table.dropColumn('temperature');
        table.dropColumn('blood_pressure');
        table.dropColumn('checkin_date');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('vitals', table => {});
};
