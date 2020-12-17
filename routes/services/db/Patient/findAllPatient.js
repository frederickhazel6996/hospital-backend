let Patients = require('../../../../models/patient');
module.exports = function () {
    return Patients.query();
};
