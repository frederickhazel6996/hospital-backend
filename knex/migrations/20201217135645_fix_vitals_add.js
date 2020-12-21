exports.up = function (knex) {
    return knex.schema.alterTable('vitals', function (table) {
        table.string('weight');
        table.string('height');
        table.string('temperature');
        table.string('blood_pressure');
        table.string('checkin_date');
    });
};

exports.down = function (knex) {};
