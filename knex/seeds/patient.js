const moment = require('moment');
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('patient')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('patient').insert([
                {
                    patient_id: 'PATIENT213612A',
                    first_name: 'Peter',
                    last_name: 'Asamoah',
                    other_name: 'Annan',
                    age: 45,
                    sex: 'Male',
                    phone_number: '0562839183',
                    added_by: 'Colombus@medicalzone.com',
                    registration_date: moment().format('MMMM Do YYYY')
                },
                {
                    patient_id: 'PATIENTbb3412A',
                    first_name: 'Elsie',
                    last_name: 'Aboagye',
                    other_name: 'Mensah',
                    age: 25,
                    sex: 'Female',
                    phone_number: '0547569183',
                    added_by: 'Colombus@medicalzone.com',
                    registration_date: moment().format('MMMM Do YYYY')
                }
            ]);
        });
};
