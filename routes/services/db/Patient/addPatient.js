let Patients = require('../../../../models/patient');
module.exports = function (args) {
    return Patients.query().insert(args).returning('*').first();
};
