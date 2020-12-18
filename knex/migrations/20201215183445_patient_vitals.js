exports.up = function (knex) {
    return knex.schema.createTable('vitals', function (table) {
        table.increments();
        table.string('name', 255).notNullable();
        table.string('vital_id', 255).unique();
        table.float('weight').unique();
        table.float('height').unique();
        table.float('temperature').unique();
        table.float('blood_pressure').unique();
        table.float('stock');
        table.string('checkin_date').unique();
        table.string('patient_id').references('patient.patient_id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('vitals');
};
