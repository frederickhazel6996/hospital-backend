let bcrypt = require('bcryptjs');
let spawn = require('spawn-password');
let temporalId = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
let temporalId2 = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('doctor')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('doctor').insert([
                {
                    doctor_id: temporalId,
                    first_name: 'Zack',
                    last_name: 'Amoah',
                    other_name: 'Elba',
                    speciality: 'Surgeon',
                    age: 52,
                    sex: 'Male',
                    phone_number: '0246738263',
                    username: 'docAmoah@medicalzone.com'.toLowerCase(),

                    password: bcrypt.hashSync(
                        'hello123456',
                        bcrypt.genSaltSync()
                    )
                },
                {
                    doctor_id: temporalId2,
                    first_name: 'Ama',
                    last_name: 'Yeboah',
                    other_name: 'Bilson',
                    speciality: 'Dermatologist',
                    age: 29,
                    sex: 'Female',
                    phone_number: '0206382937',
                    username: 'docYeboah@medicalzone.com'.toLowerCase(),

                    password: bcrypt.hashSync(
                        'hello123456',
                        bcrypt.genSaltSync()
                    )
                }
            ]);
        });
};
