let Patients = require('../../../../models/patient');
module.exports = function (args) {
    return Patients.query().delete().where(args);
};
