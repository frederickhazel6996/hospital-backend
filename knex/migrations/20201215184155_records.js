exports.up = function (knex) {
    return knex.schema.createTable('record', function (table) {
        table.increments();
        table.string('name', 255).notNullable();
        table.string('symptoms');
        table.string('doctor_id').references('doctor.doctor_id');
        table.string('patient_id').references('patient.patient_id');
        table.string('diagnosis');
        table.string('prescribed_drugs');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('record');
};
