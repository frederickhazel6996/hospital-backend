exports.up = function (knex) {
    return knex.schema.createTable('patient', function (table) {
        table.increments();
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string('other_name', 255).notNullable();
        table.string('password', 255).notNullable();
        table.string('patient_id', 255).unique();
        table.string('username').unique();
        table.string('phone_number').unique();
        table.integer('age');
        table.string('sex');
        table.string('registration_date');
        table.string('next_kin_name');
        table.string('next_kin_relation');
        table.string('date_birth');
        table.string('place_birth');
        table.string('insurance_type');
        table.string('added_by');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('patient');
};
