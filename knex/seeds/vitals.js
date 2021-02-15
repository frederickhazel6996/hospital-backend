let moment = require('moment');
exports.seed = function (knex) {
    // Deletes ALL existing entries

    return knex('vitals').insert([
        {
            id: 1,
            weight: 23,
            height: 200,
            temperature: 34,
            blood_pressure: 100,
            record_id: 'REC1p53612A',
            checkin_date: moment().format('MMMM Do YYYY'),
            vital_id: 'VITSKADK38834'
        }
    ]);
};
