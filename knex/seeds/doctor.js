let bcrypt = require('bcryptjs');
let spawn = require('spawn-password');
let temporalId = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
let temporalId2 = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
let temporalId3 = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
let temporalId4 = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
let temporalId5 = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
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
                },
                {
                    doctor_id: temporalId3,
                    first_name: 'Kylian',
                    last_name: 'Mbappe',
                    other_name: 'Dembele',
                    speciality: 'Oncologist',
                    age: 34,
                    sex: 'Male',
                    phone_number: '0248592037',
                    username: 'docMbappe@medicalzone.com'.toLowerCase(),

                    password: bcrypt.hashSync(
                        'hello123456',
                        bcrypt.genSaltSync()
                    )
                },
                {
                    doctor_id: temporalId4,
                    first_name: 'Serena',
                    last_name: 'Williams',
                    other_name: 'Sena',
                    speciality: 'Pathologist',
                    age: 39,
                    sex: 'Female',
                    phone_number: '0558204759',
                    username: 'docWilliams@medicalzone.com'.toLowerCase(),

                    password: bcrypt.hashSync(
                        'hello123456',
                        bcrypt.genSaltSync()
                    )
                },
                {
                    doctor_id: temporalId5,
                    first_name: 'Steph',
                    last_name: 'Curry',
                    other_name: 'James',
                    speciality: 'Allergist',
                    age: 54,
                    sex: 'Male',
                    phone_number: '0568209269',
                    username: 'docCurry@medicalzone.com'.toLowerCase(),

                    password: bcrypt.hashSync(
                        'hello123456',
                        bcrypt.genSaltSync()
                    )
                }
            ]);
        });
};
