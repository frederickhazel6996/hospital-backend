let bcrypt = require('bcryptjs');
let spawn = require('spawn-password');
let temporalAdminId = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
let temporalAdminId2 = `ADM${spawn.spawnAlphaNumericLength(10).toUpperCase()}`;
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('admin')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('admin').insert([
                {
                    admin_id: temporalAdminId,
                    name: 'Meister Kwame',
                    username: 'test@medicalzone.com'.toLowerCase(),
                    password: bcrypt.hashSync(
                        'hello123456',
                        bcrypt.genSaltSync()
                    )
                },
                {
                    admin_id: temporalAdminId2,
                    name: 'Elsie Yelbert',
                    username: 'test2@medicalzone.com'.toLowerCase(),
                    password: bcrypt.hashSync(
                        'hello123456',
                        bcrypt.genSaltSync()
                    )
                }
            ]);
        });
};
